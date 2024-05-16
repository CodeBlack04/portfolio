'use client'

import useContactModal from "@/hooks/useContactModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import React, { useState } from "react";
import sendMail from "@/utils/sendMail";

const ContactModal = () => {
    const contactModal = useContactModal()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const content = (
        <div className="">
            <h2 className="mb-6 text-2xl text-center">Reach out to connect!</h2>

            <form action="" className="space-y-8">
                <input name="name" type="text" onChange={handleChange} placeholder="Your name" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input name="email" type="email" onChange={handleChange} placeholder="Your e-mail address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input name="organization" type="text" onChange={handleChange} placeholder="Organization" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <textarea name="message" onChange={handleChange} placeholder="Message/Notes..." className="w-full h-[200px] p-4 border border-gray-300 rounded-xl" />

                {/* <div className="p-5 bg-djangobnb text-white rounded-xl opacity-80">
                    Error messages
                </div> */}

                <div className="flex flex-row justify-center">
                    <CustomButton
                        label="Send"
                        onClick={() => {
                            console.log('Clicked!')

                            sendMail({ ...formData })
                        }}
                        className="button-primary"
                    />
                </div>
            </form>
        </div>
    )

    return (
        <Modal 
            label='Contact'
            content={content}
            isOpen={contactModal.isOpen}
            close={contactModal.close}
        />
    )
}

export default ContactModal;