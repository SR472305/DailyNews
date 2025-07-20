import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* <h3>Contact Page</h3> */}

      <form action="" className='Form'>
        <h1 className='Form-title'>Contact Us</h1> <br />

        <div className='input-section'>
          <label htmlFor="username">Name : </label>
          <input type="text" className='input-box' />
        </div>

        <div className='input-section'>
          <label htmlFor="password">Email : </label>
          <input type="password" className='input-box' />
        </div>

       <textarea name="text-area" id="text-area" className='text-area'> how we can help you</textarea>

        <div className='BTN'>
          <button>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Contact
