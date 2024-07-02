import { useEffect } from "react";
import { motion } from "framer-motion";
import BreadcrumbComponent from "../components/Breadcrumb";
import { scrollToTop } from "../lib/utils";
import WhatsappQR from "../assets/whatsapp-qr-code.png";
import ContactForm from "../components/ContactForm";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <BreadcrumbComponent page='Contact' />
      <div className='text-neutral-200 w-full max-w-[700px] mx-auto mt-2'>
        <h1 className=' text-3xl sm:text-4xl font-bold text-center'>Contact</h1>
        {/* {'animated underline'} */}
        <div className='h-[2px] w-full mt-2' aria-hidden={true}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%", transition: { duration: 4 } }}
            viewport={{ once: true }}
            className='h-full bg-[#1FA963]'></motion.div>
        </div>
        <div className='flex flex-col items-center'>
          <figure className='size-full mt-3 max-w-sm'>
            <img
              src={WhatsappQR}
              alt='whatsapp-qr-code'
              className='aspect-square object-cover size-full grayscale'
            />
            <figcaption className='text-center mt-3'>
              Scan the QR code above and get a response within minutes!
            </figcaption>
          </figure>
        </div>
        <div className="flex justify-center relative after:absolute before:absolute after:content-[''] before:content-[''] after:w-[42%] before:w-[42%] after:h-[1px] before:h-[1px] after:bg-neutral-500 before:bg-neutral-500 after:top-[50%] before:top-[50%] after:translate-y-[-50%] before:translate-y-[-50%] before:right-0 after:left-0 text-center text-xl font-semibold my-4 after:z-[-1]">
          <p className='px-2'>Or</p>
        </div>

        <ContactForm />
        <div className='flex gap-6 items-center justify-center my-10'>
          <a
            href='https://www.linkedin.com/in/johnny-iroele-729b192a5/'
            target='_blank'
            rel='noreferrer'>
            <FaLinkedin
              fontSize={27}
              aria-hidden={true}
              className='-mt-[1px] md:-mt-0'
            />
            <span className='sr-only'>Link to Johnny's linkedin</span>
          </a>
          <a
            href='https://www.linkedin.com/in/johnny-iroele-729b192a5/'
            target='_blank'
            rel='noreferrer'>
            <RiTwitterXLine fontSize={25} aria-hidden={true} />
            <span className='sr-only'>Link to Johnny's twitter</span>
          </a>
          <a
            href='https://github.com/jonr-lang'
            target='_blank'
            rel='noreferrer'>
            <SiGithub fontSize={25} aria-hidden={true} />
            <span className='sr-only'>Link to Johnny's github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
