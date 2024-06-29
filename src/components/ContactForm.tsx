import { useState } from "react";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, message });
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Leave me a message!
      </h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col w-full col-span-full md:col-span-1'>
          <label htmlFor='firstname' className='sr-only'>
            First name
          </label>
          <input
            type='text'
            minLength={2}
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            minLength={2}
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-neutral-500 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80'
            name='email'
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='flex flex-col gap-2 w-full col-span-full'>
          <label htmlFor='message' className='sr-only'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            minLength={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border border-neutral-600 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80 h-40'
            placeholder='Message'
          />
        </div>
        <button
          type='submit'
          className='w-full col-span-full bg-black/40 rounded shadow py-3 border border-neutral-600 hover:border focus:border hover:border-postman/80 focus:outline-none focus:border-postman/80'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
