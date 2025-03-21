import { useNavigate } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-16 overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-black/80 to-black/40 text-neutral-200">
      {/* Decorative element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-postman/20 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-postman/10 blur-xl"></div>

      <div className="relative z-10 px-6 py-10 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's work <span className="text-postman">together</span> on your
            next project!
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-postman group-hover:bg-postman group-hover:text-white transition-all duration-300">
                <FaPhoneAlt size={16} />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Mobile</p>
                <p className="text-white font-medium">+2348063197455</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-postman group-hover:bg-postman group-hover:text-white transition-all duration-300">
                <MdEmail size={18} />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  iroelejohnny@outlook.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://www.linkedin.com/in/johnny-iroele-729b192a5/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-neutral-300 hover:bg-postman hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} aria-hidden={true} />
              <span className="sr-only">Link to Johnny's LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/iroelejohnny"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-neutral-300 hover:bg-postman hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <RiTwitterXLine size={20} />
              <span className="sr-only">Link to Johnny's Twitter</span>
            </a>
            <a
              href="https://github.com/jonr-lang"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-neutral-300 hover:bg-postman hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <SiGithub size={20} />
              <span className="sr-only">Link to Johnny's GitHub</span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto md:self-center">
          <button
            onClick={() => navigate("/contact")}
            className="w-full md:w-auto bg-postman text-white font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <span className="mr-2">Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
