import Image from 'next/image';
import { languages } from '@/app/data/languages';
import { plusJakarta } from '@/app/layout';
import Nudge from '@/app/components/common/Nudge';

const SingleCourseBody = ({ param }) => {
   const data = languages.find(item => item.urlFactor === param);
  return (
        <div className="single-course-body">
            <div className="inner-row">
                       <div className="single-course-content">
                                   <div className="single-course-intro"> 
                                             <h3>{data.title}</h3>
                                             <h1 className={plusJakarta.className}>{data.name}</h1>
                                   </div>
                                   <div className="image">
                                              <Image src={data.image} fill sizes='100vw' alt='' />
                                   </div>
                                   <div className="course-description">
                                             { data.description.map(item => <p key={item}>{item}</p> )}

                                             { data.extras && data.extras.length ?
                                                      data.extras.map(kitu => 
                                                            <div className="list" key={kitu.id}>
                                                                       { kitu.types.map(u =>
                                                                               <ul key={u}>
                                                                                     <li>{u}</li>
                                                                               </ul>
                                                                        )}
                                                                        { kitu.text_continuation.map(k => <p key={k}>{k}</p>)}
                                                            </div>
                                                        )

                                                      : ''
                                             }
                                   </div>
                       </div>

                       <Nudge />
            </div>
    </div>
  )
}

export default SingleCourseBody