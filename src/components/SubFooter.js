import React from "react";

import DashDineLogoMini from "../images/dashdine-mini.png";

const SubFooter = () => {
  return (
    <footer className="mt-20 bg-[#f0f0f5] relative bottom-0">
      <div className="flex gap-x-4 items-center mx-auto w-6/12 h-24">
        <h1 className="grow text-2xl font-bold text-[#3D4047]">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex gap-x-6">
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            }
            alt=""
          />
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            }
            alt=""
          />
        </div>
      </div>

      <div className="bg-black text-gray-400">
        <ul className="flex gap-x-20 justify-center p-10 text-lg">
          <ul className="flex flex-col gap-y-2">
            <img
              className="w-10 h-10"
              src={DashDineLogoMini}
              alt=""
              srcset=""
            />
            <div className="flex space-x-1">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                  fill-opacity="0.9"
                  fill="#FFFFFF"
                ></path>
              </svg>{" "}
              <a
                href="https://www.linkedin.com/in/ajinkyaa/"
                target="_blank"
                className="text-gray-400"
              >
                {" "}
                LinkedIn
              </a>
            </div>
            <div className="flex space-x-1">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                height="24"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                data-view-component="true"
                class="octicon octicon-mark-github"
              >
                <path
                  d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  fill="#E6EDF3"
                ></path>
              </svg>
              <a
                href="https://github.com/AjinkyaAshok"
                target="_blank"
                className="text-gray-400"
              >
                GitHub
              </a>
            </div>
            <li className="text-gray-400">©2024 Ajinkya Ashok</li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
          <div className="flex flex-col gap-y-6">
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Contact us</li>
              <li>Help and Support</li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Legal</li>
              <li>Terms and Conditions</li>
              <li>Cookie policy</li>
              <li>Pivacy policy</li>
            </ul>
          </div>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">We Deliver to:</li>
            <li>Banglore</li>
            <li>Delhi</li>
            <li>Pune</li>
            <li>Mumbai</li>
            <select className="bg-black border rounded">
              <option value="volvo">592 cities</option>
              <option value="saab">Kolkata</option>
              <option value="mercedes">Chennai</option>
              <option value="audi">Akola</option>
            </select>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default SubFooter;
