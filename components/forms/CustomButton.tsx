import React, { ReactElement } from "react";
import { FaDownload } from "react-icons/fa6";

interface CustomButtonProps {
    label: string;
    icon?: ReactElement
    onClick: () => void;
    className: string;
}

const CustomButton = ({label, icon, onClick, className}: CustomButtonProps) => {
    

    return (
        <div onClick={onClick} className={`${className} text-sm sm:text-md md:text-lg flex flex-row gap-4 items-center p-4 text-white text-center rounded-full cursor-pointer transition`}>
            
            {icon && (
                <div>
                    {icon}
                </div>
            )}
            
            <div className="text-center">
                {label}
            </div>
        </div>
    )
}

export default CustomButton;