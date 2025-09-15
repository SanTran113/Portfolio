import Mask from "../components/Mask";
import Circle from "../assets/circle.png";
import Leaves from "../assets/leaves.jpeg";

function About() {
  return (
    <div className="ml-10 mr-10">
      <div className="text-heading1 text-white font-bold mb-home">
        About Me!
      </div>
      <div className="flex flex-row justify-between overflow-y-hidden">
        <Mask 
          className="w-1/2 h-[50vh]" 
          maskImage={Circle}
          backgroundImage={Leaves}  
        />
        <div className="text-body text-gray-300">
          
        </div>
      </div>
    </div>
  );
}

export default About;
