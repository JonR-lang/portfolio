import { useState } from "react";
import Toast from "./Toast";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastObj, setToastObj] = useState<{
    visible: boolean;
    header?: string;
    description: string;
    variant: "outline" | "destructive";
  }>({ visible: false, header: "", description: "", variant: "outline" });

  const clearInputs = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xanwywbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (response.ok) {
        setToastObj((prevObj) => ({
          ...prevObj,
          visible: true,
          variant: "outline",
          header: "",
          description: "Your message has been sent successfully!",
        }));
        clearInputs();
      } else {
        throw new Error("Something went wrong. Try again later!");
      }
    } catch (error: any) {
      console.log(error.message);
      setToastObj((prevObj) => ({
        ...prevObj,
        visible: true,
        header: "Error!",
        description: error.message,
        variant: "destructive",
      }));
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Leave me a message!
      </h2>
      <form
        id='contact-form'
        onSubmit={handleSubmit}
        className='grid grid-cols-2 gap-4'>
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
            className='border border-neutral-600 rounded-sm p-2 hover:border-postman/80 focus:outline-none focus:border-postman/80 h-40 overflow-auto'
            placeholder='Message'
          />
        </div>
        <button
          type='submit'
          className='w-full col-span-full bg-black/40 rounded shadow py-3 border border-neutral-600 hover:border focus:border hover:border-postman/80 focus:outline-none focus:border-postman/80'>
          Submit
        </button>
      </form>
      {toastObj.visible && (
        <Toast
          closeToast={() =>
            setToastObj((prevObj) => ({
              ...prevObj,
              visible: false,
              description: "",
            }))
          }
          header={toastObj.header && toastObj.header}
          description={toastObj.description}
          variant={toastObj.variant}
        />
      )}
    </div>
  );
};

export default ContactForm;
