import React from "react";

const About = () => {
  return (
    <div >
      <div id="about">
        <div className="flex justify-center items-center align-middle">
          <h1 className="text-3xl">About Me</h1>
        </div>
        <div className="mx-5 md:mx-60 text-center flex justify-center items-center align-middle pt-10">
          <div>
            <h2>
              After graduating from my Highschool, I found myself empty. I
              didn&apos;t know what to do. Then I deciced to learn stuff. I
              started with learning Web Development. I found an some videos on
              the internet about HTML, CSS. Although, I didn&apos;t know
              anything about JavaScript. At some point I knew, I had to learn
              JS. Then, I got to know about backend stuff.
            </h2>
            <h2 className="pt-5">
              I started learning <span className="underline">Node JS</span>. I
              got to know about so many things. I was so excited. After learning
              Node JS, I started learning React JS. And I have to admit. I love
              React JS. Oh I almost forgot, I love playing games. And I love
              Minecraft. So, to make my own Minecraft server, I started learning
              Java. And oh boy, it&apos;s so hard. But it&apos;s kind of fun.
              Then I decided to work as a freelancer to earn money. At some
              point, I thought, I should create my own company. And hence began,{" "}
              <span className="underline">Ashiq The Dev</span>. As the time
              passed, more people joined in, I thought the name of the company
              does not represent a team, it&apos;s just my name. So, I changed
              the company name to <span className="underline">Spectex</span>.
              Well, I&apos;m not done yet. I have a lot to tell about myself.
              But, I don&apos;t have enought time or space to write it all. So,
              I&apos;ll just end it here. But if you want to learn more about me
              or my work, or just want to talk to me, you can contact me.
              I&apos;ll be happy to talk to you. Also, you can read my blogs (I
              like to write stuffs too).
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
