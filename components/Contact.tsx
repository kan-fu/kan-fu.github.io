import React from 'react'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { BiAt } from 'react-icons/bi'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-6xl mx-auto  min-h-[calc(100vh_-_48px)]'
    >
      <div className='h-12 md:h-16' />
      <div className='w-4/5 flex flex-col mx-auto items-center gap-4 h-4/5'>
        {/* Email and Location */}
        <h1 className='text-5xl w-full text-center p-4 '>Contact</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            <FiMail className='text-2xl' />
            <p className='text-xl'>
              fukan.thu
              <BiAt className='inline' />
              gmail.com
            </p>
          </div>
          <div className='flex flex-row gap-2'>
            <FiMapPin className='text-2xl' />
            <p className='text-xl'>Victoria, BC, Canada</p>
          </div>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mqkneoln')
  if (state.succeeded) {
    return (
      <>
        <p className='flex-grow h-full leading-loose text-2xl md:text-4xl font-semibold mx-4 my-6'>
          Thanks for your message!
        </p>
        <p className='flex-grow h-full leading-loose text-2xl md:text-4xl font-semibold mx-4 my-6'>
          I&apos;ll get back to you as soon as I can.
        </p>
      </>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex-grow flex flex-col justify-around'
    >
      <div className='form-group mb-6'>
        <input
          type='text'
          className='w-full px-3 py-1.5
                text-gray-800 dark:text-gray-100
                bg-white dark:bg-gray-600 
                border rounded border-solid border-gray-300 dark:border-gray-700
                transition ease-in-out
                focus:border-blue-600 dark:focus:border-blue-300 focus:outline-none'
          id='formName'
          name='name'
          placeholder='Name'
          required
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
      </div>
      <div className='form-group mb-6'>
        <input
          type='email'
          className='w-full px-3 py-1.5
                text-gray-800 dark:text-gray-100
                bg-white dark:bg-gray-600 
                border rounded border-solid border-gray-300 dark:border-gray-700
                transition ease-in-out
                focus:border-blue-600 dark:focus:border-blue-300 focus:outline-none'
          id='formEmail'
          name='email'
          placeholder='Email address'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <div className='form-group mb-6'>
        <textarea
          className='w-full px-3 py-1.5
                text-gray-800 dark:text-gray-100
                bg-white dark:bg-gray-600 
                border rounded border-solid border-gray-300 dark:border-gray-700
                transition ease-in-out
                focus:border-blue-600 dark:focus:border-blue-300 focus:outline-none'
          id='formMessage'
          name='message'
          rows={3}
          placeholder='Message'
          required
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>
      <button
        type='submit'
        disabled={state.submitting}
        className='
              w-full mb-4 px-6 py-2.5
              bg-blue-600 dark:bg-blue-300
              text-white dark:text-black
              font-medium text-xs leading-tight uppercase rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg dark:hover:bg-blue-200
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 dark:focus:bg-blue-200
              active:bg-blue-800 active:shadow-lg dark:active:bg-blue-100
              transition duration-150 ease-in-out'
      >
        Submit
      </button>
    </form>
  )
}

export default Contact
