"use client"
import { useForm } from "react-hook-form"
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import toast, { Toaster } from "react-hot-toast"
import Spinner from "./Spinner"

const ContactBody = () => {
    const { register, handleSubmit, formState: { errors}, reset} = useForm();
    const [captchaTokenMsg, setCaptchaTokenMsg] = useState('')
    const [ loading, setLoading ] = useState(false);
    const recaptchaRef = useRef()
    
    const submitForm = (data) => {
      
        const token = recaptchaRef.current.getValue()
        if(token === ''){
              setCaptchaTokenMsg('You must confirm the captcha')
        }else{
               setLoading(true)
              //Send form
              const formData = {
                       data: data,
                       token: token
              }
             fetch('api/contact', {
                     method: "POST",
                     headers: { 'Content-Type': 'application/json'},
                     body: JSON.stringify(formData)
             }).then(res => {
                      return res.json()
             }).then(result => {
                      if(result.status === 200){
                          toast.success(result.msg, { id: 'success message'});
                      }else{
                          toast.error(result.msg, { id: 'error message'});
                      }
            
                      reset();
                      recaptchaRef.current.reset();
                      setLoading(false)
             }).catch(error => {
                      toast.error("Form Message not sent", { id: 'error'})
                      console.log(error)
                      reset();
                      recaptchaRef.current.reset();
                      setLoading(false)
             })
        }
    }
  return (
            <div className="contact-body-section">
            <Toaster />
                { loading ? <Spinner /> : ''}
                <form onSubmit={handleSubmit(submitForm)}>
                            <div className="form-row">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className={errors.name ? "form-control error" : "form-control"} placeholder="Full name" {...register('name', { required: 'This input is required'})} />
                                        <span className="error">{errors.name && errors.name.message}</span>
                            </div>
                            <div className="form-row">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className={errors.email ? "form-control error" : "form-control"} {...register('email', { required: 'This input is required'})}  placeholder="Email Address"/>
                                        <span className="error">{errors.email && errors.email.message}</span>
                            </div>
                            <div className="form-row">
                                       <label htmlFor="phone">Phone</label>
                                       <input type="number" className={errors.phone ? "form-control error" : "form-control"} {...register('phone', {required: 'This input is required'})} placeholder="Phone Number" pattern="[0-9]+" />
                                       <span className="error">{errors.phone && errors.phone.message}</span>
                            </div>
                             <div className="form-row">
                                       <label htmlFor="subject">Subject</label>
                                       <input type="text" className={errors.subject ? "form-control error" : "form-control"} {...register('subject', {required: 'This input is required'})} placeholder="Subject" />
                                       <span className="error">{errors.subject && errors.subject.message}</span>
                             </div>
                             <div className="form-row">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="" id="" cols="30" rows="10" {...register('clientMsg', {required: 'This input is required'})} placeholder="Write your message"></textarea>
                                        <span className="error">{errors.clientMsg && errors.clientMsg.message}</span>
                             </div>
                             <div className="form-row">
                                    <ReCAPTCHA 
                                          sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
                                          ref={recaptchaRef}
                                          onChange={() => setCaptchaTokenMsg('')}
                                    />
                                    <span className="error">{captchaTokenMsg}</span>
                             </div>
                             <div className="form-btn">
                                      <button type="submit">Send Message</button>
                             </div>
                </form>
    </div>
  )
}

export default ContactBody