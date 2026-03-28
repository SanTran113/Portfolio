import { Link } from "react-router-dom";

function WebHome() {
  return (
    <div className="pl-10 pr-10 h-[calc(100vh-6rem)] w-full flex flex-col justify-center ">
      <h1 className="text-title font-light text-white mb-home flex justify-center">
        San Tran
      </h1>
      <section className="text-heading1 font-bold text-white flex justify-center items-center">
        <Link
          to={"/web/works"}
          className="text-white text-heading2 font-medium cursor-pointer outline-1 hover/see:visible 
          outline-white flex flex-row justify-between items-center p-3 lg:p-4 space-y-1 hover:bg-white hover:text-[#2B2C3C]"
        >
          See Projects
          <i className="fi fi-rr-angle-small-right flex justify-center"></i>
        </Link>
      </section>
      <div className="-translate-y-150 lg:-translate-y-320">
        {/* <GradientCircle /> */}
      </div>
    </div>
  );
}

export default WebHome;
