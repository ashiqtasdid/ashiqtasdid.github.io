import React from "react";

const Contact = () => {
  return (
    <div className="pt-10 pb-10" id="contact">
      <div className="flex justify-center text-center items-center">
        <h1 className="text-3xl">Contact</h1>
      </div>
      <div className="pt-10 flex justify-center text-center items-center">
        <div>
          <p>Discord: ashiqtasdid</p>
          <p>
            Discord Server:{" "}
            <a href="https://discord.gg/jf28jcFJk9" className="hover:underline" target="_blank">
              click here
            </a>
          </p>
          <p>
            Twitter:{" "}
            <a href="https://twitter.com/theashiqtasdid" className="hover:underline" target="_blank">
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
