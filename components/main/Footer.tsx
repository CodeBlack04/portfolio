import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { 
    FaFacebook,
    FaPatreon
 } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[20px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]"><a target="_blank" href="https://github.com/CodeBlack04">Github</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[20px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]"><a target="_blank" href="https://www.linkedin.com/in/md-tauhidur-rahman-38a8b21ab/">Linkedin</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaFacebook />
                        <span className="text-[15px] ml-[6px]"><a target="_blank" href="https://www.facebook.com/tauhidur.rahman.9406">Facebook</a></span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[20px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">More about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaPatreon/>
                        <span className="text-[15px] ml-[6px]">Become a patreon</span>    
                    </p>
                </div>
            </div>

            <div className="m-[20px] text-[15px] text-center">
                &copy;  CodeBlack04 . All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer