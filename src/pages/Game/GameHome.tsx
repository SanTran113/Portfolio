import { GradientCircle } from "../../components/GradientCircle";
import Button from "../../components/Button";

function WebHome() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] relative flex justify-center items-center">
      <section className="absolute flex flex-col justify-center items-center">
        <h1 className="text-title font-light text-white mb-home flex justify-center">
          San Tran
        </h1>
        <section className="text-heading1 font-bold text-white flex justify-center items-center">
          <Button label="See Projects" buttonLink="/game/works" icon={true} />
        </section>
      </section>
      <section className="fixed -z-10 inset-0 -translate-y-130">
        <GradientCircle />
      </section>
    </div>
  );
}

export default WebHome;
