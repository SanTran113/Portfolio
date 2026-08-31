import { useState } from "react";
import { projectList } from "../../data/projectsList";
import ProjectHeader from "../../components/ProjectHeader";

import DrinkMenu from "../../assets/tavern/drinkMenu.png";
import DrinkMenuAdd from "../../assets/tavern/drinkMenuAdd.png";
import DrinkMenuHover from "../../assets/tavern/drinkMenuHover.png";
import InventoryImg from "../../assets/tavern/tavernInventory.png";
import LoginImg from "../../assets/tavern/tavernLogin.png";
import SignupImg from "../../assets/tavern/tavernSignup.png";
import BgImg from "../../assets/tavern/tavernbg.png";
import BgImgDark from "../../assets/tavern/tavernbgdark.png";
import AllDrinks from "../../assets/tavern/drinks.png";

export default function Tavern() {
  const [project] = useState(projectList[8]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        project={project}
        coverImg={project.coverImg}
        projectName={project.name}
        year={"January 2025 - March 2025"}
        role="Software Engineer"
        technologies={project.skillsUsed}
        description="A special twist to an ecommerce website! An interactive tavern where the user is able to purchase a fantasy drink."
      />
      <div className="flex flex-col px-[5%] md:px-[10%] lg:px-[20%]">
        <button
          className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5 mb-[5%]"
          onClick={() =>
            window.open(
              "https://github.com/SanTran113/Fantasy-Tavern",
              "_blank",
            )
          }
        >
          See Github
        </button>
        <div className="space-y-[5%] mt-[3%]">
          <section className="text-heading2 text-white font-bold">
            Preface
            <p className="text-body font-normal mt-[1%]"></p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Goals
            <div className="text-body font-normal mt-[1%]">
              To create a fun interactive twist to an ecommerce website.
              <ul className="list-decimal ml-[4%]">
                <li className="mt-2">User authentication</li>
                <li className="mt-2">View a selection of items</li>
                <li className="mt-2">Purchase the item</li>
                <li className="mt-2">Edit user profile</li>
              </ul>
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Approach
            <p className="text-body font-normal mt-[1%]"></p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Screens
            <h1 className="font-bold text-heading3">User Authentication</h1>
            <p className="text-body font-normal mt-[1%]">
              <b>Development: </b>I built a token based authentication with
              JWTs, where the passwords are hashed with bcrypt before storage.
              On successful login the server issures a signed JWT that the
              client attaches to future requests via an Authorization: Bearer
              header.
              <br></br>
              <b>Design: </b>For the design I wanted the login and signup form
              to mimic a traveler's ID card, hence the stamp detailing. The
              login and signup buttons are styled as though it was a signature
              in red ink.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5 item-start">
              <img
                src={LoginImg}
                alt="tavernLoginImg"
                className="w-full md:w-1/2 lg:w-1/2 mt-[2%] mb-[3%] aspect-auto"
              />
              <img
                src={SignupImg}
                alt="tavernSignupImg"
                className="w-full md:w-1/2 lg:w-1/2 mb-[3%]"
              />
            </div>
            <h1 className="font-bold text-heading3">Interactive Navigation</h1>
            <p className="text-body font-normal mt-[1%]">
              Below is the main page of the website. To navigate, the user is
              able to select the drinks (right side) for the product, the quest
              board (left side) for the blog. You may also click either of the
              lights to enter dark mode. The second image below is the dark
              mode.
            </p>
            <img
              src={BgImg}
              alt="tavernLoginImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <img
              src={BgImgDark}
              alt="tavernLoginImg"
              className="w-full mb-[3%]"
            />
            <h1 className="font-bold text-heading3">Drink Menu</h1>
            <p className="text-body font-normal mt-[1%]">
              Because the theme is a tavern, I had the product listing mimic a
              menu. If you hover over a menu item, there is a pop up description
              of that menu item, including the item name, image, and
              description. If you click on the menu item, you purchase the item
              and it is added to your inventory.
            </p>
            <img
              src={DrinkMenu}
              alt="tavernLoginImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <img
              src={DrinkMenuHover}
              alt="tavernLoginImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <img
              src={DrinkMenuAdd}
              alt="tavernLoginImg"
              className="w-full mt-[2%] mb-[3%]"
            />
            <h1 className="font-bold text-heading3">Inventory</h1>
            <p className="text-body font-normal mt-[1%]">
              Below is an image of all the drinks laid out for showcase
              purposes. The drinks are from left to right: Mulberry Madness,
              Secret Paradise, Blueberry Madness, Sweetest Sin, Dissociate,
              Phoenix Ashes, Emperor's Tea, Tranny of Dragons, and Acidic
              Basillisk.
            </p>
            <div className="flex justify-center items-center">
              <img
                src={AllDrinks}
                alt="tavernLoginImg"
                className="w-full lg:w-2/5 mt-[2%] mb-[3%]"
              />
            </div>
            <h1 className="font-bold text-heading3">Inventory</h1>
            <p className="text-body font-normal mt-[1%]">
              Once you have purchased the item, you may view it in your
              inventory. It will depict the items that you own. Inside your
              inventory you may also "sell" anything that you may not want or
              edit your user information. Although, editing your use may not
              have fit here I wanted to practice editing user information,
              including username and password.
            </p>
            <img
              src={InventoryImg}
              alt="tavernLoginImg"
              className="w-full mt-[2%] mb-[3%]"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
