function Contact() {
  return (
    <div className="pl-10 pr-10">
      <div className="text-heading1 text-white font-bold mb-home">Contact </div>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-stretch">
        <section className="flex flex-col bg-[var(--bg-contact)] m-5 p-5 space-y-6 justify-between flex-1">
          <i className="text-3xl fi fi-solid fi-brands-linkedin text-white mb-20"></i>
          <h1 className="text-contact text-white font-bold">LinkedIn</h1>
          <div className="text-contact text-white mb-10">
            Chat with me through LinkedIn and see some demos!
          </div>
          <button
            className="text-contact cursor-pointer hover:text-gray-300 hover:bg-gray-900 p-2 rounded border border-white text-white w-max"
            onClick={() =>
              window.open("https://www.linkedin.com/in/san-tran113/", "_blank")
            }
          >
            See LinkedIn Profile
          </button>
        </section>
        <section className="flex flex-col bg-[var(--bg-contact)] m-5 p-5 space-y-6 justify-between flex-1">
          <i className="text-3xl fi fi-solid fi-sr-envelope text-white mb-20"></i>
          <h1 className="text-contact text-white font-bold">Email</h1>
          <div className="text-contact text-white mb-10">
            Email me directly @ san.tran7141@gmail.com!
          </div>
          <button
            className="text-contact cursor-pointer hover:text-gray-300 hover:bg-gray-900 p-2 rounded border border-white text-white w-max"
            onClick={() =>
              window.open("mailto:san.tran7141@gmail.com", "_blank")
            }
          >
            Email Me
          </button>
        </section>
        <section className="flex flex-col bg-[var(--bg-contact)] m-5 p-5 space-y-6 justify-between flex-1">
          <i className="text-3xl fi fi-solid fi-brands-github text-white mb-20"></i>
          <h1 className="text-contact text-white font-bold">GitHub</h1>
          <div className="text-contact text-white mb-10">
            Check out my projects on GitHub!
          </div>
          <button
            className="text-contact cursor-pointer hover:text-gray-300 hover:bg-gray-900 p-2 rounded border border-white text-white w-max"
            onClick={() =>
              window.open("https://github.com/san-tran113", "_blank")
            }
          >
            See GitHub Profile
          </button>
        </section>
      </div>
    </div>
  );
}

export default Contact;
