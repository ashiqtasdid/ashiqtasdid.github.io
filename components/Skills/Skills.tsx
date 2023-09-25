import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="mx-44 pb-10" id="skills">
          <div className="flex justify-center align-middle text-center">
            <h1 className="text-3xl">Skills</h1>
          </div>
          <div className="flex space-x-2 pt-10 justify-center align-top text-center">
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              HTML
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              CSS
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              JavaScript
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              TypeScript
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              React JS
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Next JS
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Node JS
            </div>
          </div>
          <div className="flex pt-2 space-x-2 justify-center align-top text-center">
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Express JS
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Java
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Python
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              Git
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              GitHub
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              MySQL
            </div>
            <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
              MongoDB
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden block">
        <div className="mx-10 pb-10" id="skills">
          <div className="flex justify-center align-middle text-center">
            <h1 className="text-3xl">Skills</h1>
          </div>
          <div className="flex space-x-2 pt-10 justify-center align-top text-center">
            <div>
              <div className="flex space-x-2">
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  HTML
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  CSS
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  JavaScript
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  TypeScript
                </div>
              </div>
              <div className="flex pt-2 justify-center items-center text-center space-x-2">
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  React JS
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Next JS
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Node JS
                </div>
              </div>
              <div className="flex pt-2 space-x-2 justify-center align-top text-center">
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Express JS
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Java
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Python
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  Git
                </div>
              </div>
              <div className="flex pt-2 space-x-2 justify-center align-top text-center">
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  GitHub
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  MySQL
                </div>
                <div className="bg-slate-100 bg-opacity-25 rounded-md px-2 py-2 hover:scale-110 transition duration-200 cursor-pointer">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
