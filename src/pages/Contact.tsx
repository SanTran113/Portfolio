import { GradientCircle } from "../components/GradientCircle";
import Button from "../components/Button";

function Contact() {
  return (
    <>
      <div className="pl-10 pr-10">
        <div className="text-heading1 text-white font-bold mb-home mt-5">
          Contact{" "}
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-stretch ">
          <section className="flex flex-col rounded-md bg-white/3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl m-5 p-5 space-y-6 justify-between flex-1">
            <i className="text-3xl fi fi-solid fi-brands-linkedin text-white mb-20"></i>
            <h1 className="text-contact text-white font-bold">LinkedIn</h1>
            <div className="text-contact text-white mb-10">
              Chat with me through LinkedIn and see some demos!
            </div>
            <Button
              label="See LinkedIn Profile"
              varient="fullPrimary"
              onClick={() =>
                window.open("https://www.linkedin.com/in/san-tran1/", "_blank")
              }
            />
          </section>
          <section className="flex flex-col rounded-md bg-white/3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl m-5 p-5 space-y-6 justify-between flex-1">
            <i className="text-3xl fi fi-solid fi-sr-envelope text-white mb-20"></i>
            <h1 className="text-contact text-white font-bold">Email</h1>
            <div className="text-contact text-white mb-10">
              Email me directly @ san.tran7141@gmail.com!
            </div>
            <Button
              label="Email Me"
              varient="fullPrimary"
              onClick={() =>
                window.open("mailto:san.tran7141@gmail.com", "_blank")
              }
            />
          </section>
          <section className="flex flex-col rounded-md bg-white/3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl m-5 p-5 space-y-6 justify-between flex-1">
            <i className="text-3xl fi fi-solid fi-brands-github text-white mb-20"></i>
            <h1 className="text-contact text-white font-bold">GitHub</h1>
            <div className="text-contact text-white mb-10">
              Check out my projects on GitHub!
            </div>
            <Button
              label="See GitHub Profile"
              varient="fullPrimary"
              onClick={() =>
                window.open("https://github.com/SanTran113", "_blank")
              }
            />
          </section>
        </div>
      </div>
      <section className="fixed -z-10 inset-0 -translate-y-50 lg:-translate-y-130">
        <GradientCircle />
      </section>
    </>
  );
}

export default Contact;
