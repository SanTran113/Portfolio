import { GradientCircle } from "../../components/GradientCircle";
import Button from "../../components/Button";

function WebHome() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] relative flex justify-center items-center">
      <section className="absolute flex flex-col items-start ">
        <h1 className="text-title/[1] font-light text-white">
          San Tran
        </h1>
        <h2 className="text-heading1 font-light text-white mb-8">
          Developer and Designer
        </h2>
        <section className="w-full text-heading1 font-bold text-white">
          <Button
            label="See Projects"
            buttonLink="/web/works"
            icon={true}
            varient="primary"
          />
        </section>
      </section>
      <section className="fixed -z-10 inset-0 -translate-y-130">
        <GradientCircle />
      </section>
    </div>
  );
}

export default WebHome;
