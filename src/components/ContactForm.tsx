const ContactForm = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Leave me a message!
      </h2>
      <form className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col w-full col-span-full md:col-span-1'>
          <label htmlFor='firstname' className='sr-only'>
            First name
          </label>
          <input
            type='text'
            className='border border-neutral-500 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80'
            name='firstname'
            id='firstname'
            placeholder='Firstname'
          />
        </div>
        <div className='flex flex-col gap-2 w-full col-span-full md:col-span-1'>
          <label htmlFor='lastname' className='sr-only'>
            Last name
          </label>
          <input
            type='text'
            className='border border-neutral-500 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80'
            name='lastname'
            id='lastname'
            placeholder='Lastname'
          />
        </div>
        <div className='flex flex-col gap-2 w-full col-span-full'>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>
          <input
            type='text'
            className='border border-neutral-500 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80'
            name='email'
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='flex flex-col gap-2 w-full col-span-full border border-neutral-500 rounded-sm '>
          <label htmlFor='message' className='sr-only'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            className='border border-neutral-600 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80 h-40'
            placeholder='Message'
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='w-full col-span-full bg-black/40 rounded shadow py-3 border border-neutral-600 hover:border focus:border hover:border-postman/80 focus:outline-none focus:border-postman/80'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
