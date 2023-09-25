import React from "react";

const Experience = () => {
  return (
    <div className="flex justify-center items-center align-middle text-center" id="experience">
        <div>

      <h1 className="text-3xl">Experience</h1>
      <div className="pt-10 flex mx-5 md:mx-72 space-y-2 justify-center items-center align-middle">
        <div>
          <div className="pt-2">
            <h2 className="text-xl font-medium">CEO & Founder, Spectex</h2>
            <p className="pt-2 text-gray-400">
              Spectex is a dynamic IT services company established in 2020. We
              specialize in a wide array of services including Web Development,
              SEO, Software Development, and much more.
            </p>
          </div>
          <div className="pt-2">
            <h2 className="text-xl font-medium">Freelancer, Upwork</h2>
            <p className="pt-2 text-gray-400">
              Upwork is a freelancing platform where businesses and independent
              professionals connect and collaborate remotely.
            </p>
          </div>
          <div className="pt-2">
            <h2 className="text-xl font-medium">Developer, CraftsMCNetwork</h2>
            <p className="pt-2 text-gray-400">
              CraftsMCNetwork is a Minecraft Server. Which hosts Bedwars,
              Skywars, PVP Arena, Survival & Much more.
            </p>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Experience;
