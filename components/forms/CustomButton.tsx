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
        <div onClick={onClick} className={`${className} flex flex-row gap-3 items-center p-5 text-white text-center rounded-full cursor-pointer transition`}>
            
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