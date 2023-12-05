import React from 'react'
import {  profile, ragul , mani , nalini , abar , kani, laks , nik, kums } from '../images/team'
import Image from 'next/image'
import { instagram, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';


const teamDetails = [
    {
        name: 'Ragul Adhithya M President',
        image: ragul,
        year: "III - IT",
        linkedin: 'https://www.linkedin.com/in/raguladhithyam/',
        github: 'https://github.com/raguladhithyam',
        instagram: 'https://www.instagram.com/ragul_2003/',

    },
    {
        name: 'Manimaran T N Vice President',
        image: mani,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/manimaran-t-n-248b12230/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Rasheqqa A A Treasurer',
        image: profile,
        year: "III - CIVIL",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Nalini Priya D Secretary',
        image: nalini,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Abarna V - Joint Secretary',
        image: abar,
        year: "III - CSE",
        linkedin: 'https://www.linkedin.com/in/abarnav',
        github: 'https://github.com/abarnavelusamy',
        instagram: 'https://www.instagram.com/abarna_0202',

    },
    {
        name: 'Kanishka T Joint Treasurer',
        image: kani,
        year: "III - CSE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Lakshan S Social Media Lead',
        image: laks,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Nikhil V Visual Design Lead',
        image: nik,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Kumutha S Documentation Lead',
        image: kums,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && (
                <NavMenu />
            )}
            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">OUR <span className="text-primary text-[#EACD69]">TEAM.</span></h1>

                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {teamDetails.map((item) => (
                            <div className="w-[300px] px-6 py-6  text-center bg-slate-200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                    <Image className="mx-auto rounded-full h-36 w-36" src={item.image} alt="author avatar" />
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                            <h1 className="text-black font-bold">{item.name}</h1>
                                            <p className='text-black'>{item.year}</p>
                                            <div className="flex justify-center mt-5 space-x-5">
                                                <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                                                    <span className="sr-only">Instagram</span>
                                                    <Image src={instagram} alt="twitter" />
                                                </a>
                                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">GitHub</span>
                                                    <Image src={github} alt="github" />
                                                </a>
                                                <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <Image src={linkedin} alt="linkedin" width="20" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam