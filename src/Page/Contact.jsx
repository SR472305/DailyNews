import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <form 
        action="" 
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 md:p-10"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        {/* Name Field */}
        <div className="mb-5">
          <label 
            htmlFor="username" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Name:
          </label>
          <input 
            type="text" 
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label 
            htmlFor="email" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Email:
          </label>
          <input 
            type="email" 
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label 
            htmlFor="message" 
            className="block text-gray-700 font-semibold mb-2"
          >
            Message:
          </label>
          <textarea 
            id="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
