// const Contact = () =>{
//   return (
//       <>
//   <h1 className="text-3xl font-bold p-5 m-7 bg-yellow-200">Contact Us ..</h1>
//   <div className="text-2xl p-4 m-10">
//   <p className="flex gap-7 mb-5"><i class="fa-sharp fa-solid fa-envelope"></i> varsharanijnv16122001@gmail.com</p>
//   <p className="flex gap-7 mb-5"><i class="fa-solid fa-phone"></i>+919905465641</p>
//   </div>
//   <div className="text-2xl bg-slate-100 p-5 m-10">We value your feedback and suggestions, so don't hesitate to reach out to us through our contact section. Your input helps us improve our app and deliver an exceptional food ordering service tailored to your needs.</div>
//   </>
//   )
// }
// export default  Contact;

import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-4">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a issue? Want to send feedback about a Website and App? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-slate-700 text-white rounded-lg bg-primary-700 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
      </form>
  </div>
</section>


    </>
  );
};

export default Contact;
