import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function contactForm() {
  const form = useRef();

  const toast_options = {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored"
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs.sendForm('service_qto009r', 'template_jeq48kk', form.current, '98FfggvBPgvIyklhK')
      .then((result) => {
          toast.success("Form submitted successfully!", toast_options);
      }, (error) => {
          toast.error("Something went wrong... Try again, or contact me via email!", toast_options);
      });
  };
  return (
    <section id="contact" className="w-full z-10 bg-[#111]/[.95] flex flex-col justify-center py-10">
      <div className="relative my-5">
        <h1 className="text-4xl heading font-semibold text-center">Get in Touch!</h1>
        <p className="w-full text-center heading2 cla">Contact</p>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-center items-center">
        <a href="mailto:sohamsraut97@gmail.com" target="_blank"  className="mt-6 flex flex-col bg-[#1b1b1b] border-2 border-[#ffb400]/[0.5] max-w-[300px] items-center rounded-lg px-5 py-4">
          <p className="font-semibold text-lg">Feel free to reach out!</p>
          <img src="./envelope-classic.svg" className="w-[40px] h-[40px] mt-2 mb-2"/>
          <p className="text-lg heading ">soham95sa@gmail.com</p>
        </a>
        <div className="md:h-full flex md:flex-col flex-row md:w-fit w-4/5 mt-6 mx-6 items-center justify-center">
          <div className="rounded-xl border-2 border-[#ffb400] md:h-1/2 w-1/2 md:w-0"></div>
          <div className="para text-sm py-1 px-3">or</div>
          <div className="rounded-xl border-2 border-[#ffb400] md:h-1/2 w-1/2 md:w-0"></div>
        </div>
        <form className="flex flex-col w-[80%] md:w-[500px] mt-6" ref={form} onSubmit={sendEmail}>
        <div className="relative z-0 w-full mb-7 group">
            <input type="text" name="floating_name" id="floating_name" className="rounded-lg block py-2.5 px-2 w-full text-sm bg-transparent border-2 appearance-none focus:outline-none border-[#ffb400]  peer" placeholder=" " required />
            <label htmlFor="floating_name" className="para px-2 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb400] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9"> Name</label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
            <input type="email" name="floating_email" id="floating_email" className="rounded-lg block py-2.5 px-2 w-full text-sm bg-transparent border-2 appearance-none focus:outline-none  border-[#ffb400]  peer" placeholder=" " required />
            <label htmlFor="floating_email" className="para px-2 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb400] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-7 group">
            <textarea rows={5} type="email" name="message" id="message" className="rounded-lg block py-2.5 px-2 w-full text-sm bg-transparent border-2 appearance-none focus:outline-none  border-[#ffb400]  peer max-h-[130px]" placeholder=" " required></textarea>
            <label htmlFor="message" className="para px-2 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb400] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Your Message</label>
        </div>
        <button type="submit" className="text-base py-2 px-3 w-1/3 rounded-md border-2 border-[#ffb400] bg-[#ffb400] text-[#111] mb-4 heading font-semibold">Submit</button>
      </form>
      </div>
    </section>
  )
}