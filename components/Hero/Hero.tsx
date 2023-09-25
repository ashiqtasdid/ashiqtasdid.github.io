"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faTwitch,
  faGithub,
  faYoutube,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Hero = () => {
  const img = "https://cdn.spectex.xyz/images/web/ashiqtasdid_real.jpg";
  return (
    <div>
      <div className="pt-20 pb-20 hidden md:block" id="hero">
        <div className="flex items-center pt-10 justify-center">
          <Image
            className="ring-4 hover:scale-150 transition duration-200 shadow-lg ring-slate-500 rounded-full"
            src={img}
            height={100}
            width={100}
            alt="ashiqtasdid"
          />
        </div>
        <div className="pt-10">
          <h1 className="text-center text-4xl  text-white mt-5 mx-56 ">
            <span className="font-bold">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
                Ashiq
              </span>
              .
            </span>{" "}
            I&apos;m a{" "}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "developer",
                2000,
                "streamer",
                2000,
                "entrepreneur",
                2000,
                "writer",
                2000,
                "artist",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
            />
            & more.
          </h1>
          <h2 className="flex text-center text-2xl mx-44 justify-center items-center pt-5">
            I love to build things that make a difference. Also, I&apos;m the
            CEO & Founder of Spectex. I&apos;m currently focusing on creating a
            better world with technology.
          </h2>

          <div className="flex justify-center space-x-5 items-center pt-10">
            <Link href="https://twitter.com/TheAshiqTasdid" target="_blank">
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} height={25} width={30} />
              </div>
            </Link>
            <Link href="https://facebook.com/ashiq.tasdid.1" target="_blank">
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} height={25} width={30} />
              </div>
            </Link>
            <Link href="https://twitch.tv/ashiqscarx" target="_blank">
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faTwitch} height={25} width={30} />
              </div>
            </Link>
            <Link href="https://youtube.com/@ashiqtasdid" target="_blank">
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} height={25} width={30} />
              </div>
            </Link>
            <Link href="https://github.com/ashiqtasdid" target="_blank">
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} height={25} width={30} />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashiqtasdid/"
              target="_blank"
            >
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} height={25} width={30} />
              </div>
            </Link>
            <Link
              href="https://open.spotify.com/artist/6kLu7rLoPcjvSukNwbWAom"
              target="_blank"
            >
              <div className="bg-slate-300 rounded-full py-4 px-3.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                <FontAwesomeIcon icon={faSpotify} height={25} width={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden block">
        <div className="pt-20 pb-20">
          <div className="flex items-center pt-10 justify-center">
            <Image
              src={img}
              height={100}
              width={100}
              alt="ashiqtasdid"
              className="ring-4 hover:scale-150 transition duration-200 shadow-lg ring-slate-500 rounded-full"
            />
          </div>
          <div className="pt-10 flex justify-center items-center text-center">
            <div>
              <h1 className="text-center text-3xl text-white mt-5 mx-10 ">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
                  Ashiq
                </span>
                . I&apos;m a{" "}
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "developer",
                    2000,
                    "streamer",
                    2000,
                    "entrepreneur",
                    2000,
                    "writer",
                    2000,
                    "artist",
                    2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                  className="bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600"
                />
                .
              </h1>
              <h2 className="flex text-center text-xl mx-5 justify-center items-center pt-6">
                I love to build things that make a difference. Also, I&apos;m
                the CEO & Founder of Spectex. I&apos;m currently focusing on
                creating a better world with technology.
              </h2>
              <div className="flex justify-center space-x-2.5 items-center pt-10">
                <Link href="https://twitter.com/TheAshiqTasdid" target="_blank">
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faXTwitter} height={25} width={30} />
                  </div>
                </Link>
                <Link
                  href="https://facebook.com/ashiq.tasdid.1"
                  target="_blank"
                >
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faFacebook} height={25} width={30} />
                  </div>
                </Link>
                <Link href="https://twitch.tv/ashiqscarx" target="_blank">
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faTwitch} height={25} width={30} />
                  </div>
                </Link>
                <Link href="https://youtube.com/@ashiqtasdid" target="_blank">
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faYoutube} height={25} width={30} />
                  </div>
                </Link>
                <Link href="https://github.com/ashiqtasdid" target="_blank">
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faGithub} height={25} width={30} />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ashiqtasdid/"
                  target="_blank"
                >
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faLinkedin} height={25} width={30} />
                  </div>
                </Link>
                <Link
                  href="https://open.spotify.com/artist/6kLu7rLoPcjvSukNwbWAom"
                  target="_blank"
                >
                  <div className="bg-slate-300 rounded-full py-2 px-1.5 bg-opacity-25 hover:scale-110 transition duration-100 cursor-pointer">
                    <FontAwesomeIcon icon={faSpotify} height={25} width={30} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
