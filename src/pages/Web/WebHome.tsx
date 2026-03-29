import { Link } from "react-router-dom";
import Particles from "../../components/Particles";

function WebHome() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] relative flex justify-center items-center">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleCount={360}
          particleSpread={13}
          speed={0.02}
          particleColors={["#606276", "#b5987d", "#ffffff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={60}
          sizeRandomness={0.9}
          cameraDistance={21}
          disableRotation={false}
        />
      </div>
      <section className="absolute flex flex-col justify-center items-center">
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
        <div className="-translate-y-150 lg:-translate-y-320"></div>
      </section>
    </div>
  );
}

export default WebHome;
