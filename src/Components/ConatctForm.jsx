import React, { useRef } from 'react'
import "./contactstyle.css"
import emailjs from 'emailjs-com'
import { Form } from 'react-router-dom'

const ConatctForm = () => {
  const form = useRef();



 const sendmail=(e)=>{
  e.preventDefault();

 emailjs.sendForm('service_7n8fcqe','template_ckzs9n4', Form.current ,'5wbqlLBqVIcCl0q6b').then((res)=>{
  console.log(res);
 }).catch((err)=>{
  console.log(err);
 })
 }

  return (
    <div className='form' ref={form} onSubmit={sendmail}>
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' />
        <label htmlFor="">Email</label>
        <input type="email" name='email'/>

        <label htmlFor="">Message</label>
        <textarea  rows="6" placeholder='Type Your Message Here' name='message'></textarea>
        <button className='button'type='submit' onClick={sendmail}>Submit</button>
      </form>

    </div>
  )
}

export default ConatctForm
