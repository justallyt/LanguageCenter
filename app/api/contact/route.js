import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
export async function POST(req, res) {
        const { data, token} = await req.json();
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        try {
            const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${token}`);

            const google_result = await response.json();

            if(google_result.success){
                      const { name, email, phone, subject, clientMsg } = data;

                      const content = {
                        to: "tlc@language-cntr.com",
                        bcc: ["wamirara@gmail.com", "kngugi@gmail.com"],
                        from: email,
                        subject: `TLC Contact Form Message - Subject(${subject})`,
                        text: `
                                Name:  ${name}\n
                                Phone Number: ${phone}\n
                                Message: ${clientMsg} \n
                        `,
                        html: `<p>
                                   Name: ${name} <br />
                                   Phone: ${phone} <br />
                                   Message: ${clientMsg}
                        </p>`
                }

                // const mailSend = await sgMail.send(content);
                // if(mailSend){
                //        return NextResponse.json({ msg: 'Your message has been sent successfully', status: 200})
                // }else{
                //     return NextResponse.json({ msg: 'Your message was not sent', status: 500})
                // }
                return NextResponse.json({ msg: 'Your email has been sent successfully', status: 200})
            }else{
                   return NextResponse.json({ msg: 'Invalid Captcha', status: 500})
            }
        } catch (error) {
                 console.log(error)
                return NextResponse.json({ msg: 'Internal server error', status: 500})
        }
}  