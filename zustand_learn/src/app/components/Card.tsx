"use client";

import { BsFileBarGraphFill } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import {Divider} from "@heroui/divider";

import { Inter } from "next/font/google";

const inter = Inter ({
    subsets: ["latin"],
})


export default function Card (){



    return (
        <div className="flex flex-col bg-[#383838] shadow-black w-100 rounded-xl">
            <div className="flex items-center gap-2 p-4">
                <BsFileBarGraphFill className="h-10 w-10 fill-[#00ac70]"/>
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-white">Titulo da direita</h2>
                    <p className="font-normal text-sm">Conteúdo da direita</p>
                </div>

            </div>
            <Divider />
            <div className="p-4">
                <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quidem unde, esse reiciendis maxime amet! </p>
            </div>
            <Divider />
            <a className="flex items-center p-4 text-[#0059ff]" href="https://www.google.com/search?client=opera-gx&q=how+to+use+react+icons+in+my+next+app&sourceid=opera&ie=UTF-8&oe=UTF-8">Acesse o link para saber mais <FaExternalLinkAlt className="fill-[#0059ff] ml-1.5"/> </a>

        </div>
    )
}