import React from "react";
import Image from "next/image";

const Projects = () => {
  const img = "https://cdn.spectex.xyz/images/web/project-mc-utils.png";
  const img1 = "https://cdn.spectex.xyz/images/web/typescript.png";
  return (
    <div className="pt-10 pb-10" id="projects">
      <div className="flex justify-center items-center align-middle">
        <h1 className="text-3xl">Projects</h1>
      </div>
      <div>
        {/* Minecraft Utilities */}
        <div className="flex pt-10 justify-center items-center align-middle">
          <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden w-80">
            <Image
              src={img}
              width={1000}
              height={1000}
              alt="Project Image"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-100">
                Minecraft Utilities Discord Bot
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                A feature-rich bot for Minecraft tools & utilities. Easily, get
                real-time information about a Minecraft Server, Player Skin,
                UUID & much more!
              </p>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="text-sm text-green-500">Released</p>
                </div>
                <div>
                  <p className="text-xs text-blue-500">Invite</p>
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=810192936472936480&scope=bot&permissions=7168"
                    target="_blank"
                  >
                    <p className="text-sm text-gray-400">
                      Click Here to Invite
                    </p>
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://spectex.xyz/projects/minecraft-utilities"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Typescript Tutorial */}
        <div className="flex pt-10 justify-center items-center align-middle">
          <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden w-80">
            <Image
              src={img1}
              width={1000}
              height={1000}
              alt="Project Image"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-100">
                Typescript Tutorial Series
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                A Basic Tutorial Series on Typescript. Learn the basics of
                Typescript in this series.
              </p>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="text-sm text-green-500">Released</p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/ashiqtasdid/basic-typescript-tutorial"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10 justify-center items-center align-middle">
          <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden w-80">
            {/* <Image src={img1} width={1000} height={1000} alt="Project Image" className="w-full h-40 object-cover"/> */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-100">
                Task Manager
              </h2>
              <p className="text-sm text-gray-300 mt-2">
                A simple task manager app made with React JS. Which will help
                you organize your tasks.
              </p>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="text-sm text-blue-500">In Development</p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/ashiqtasdid/"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
