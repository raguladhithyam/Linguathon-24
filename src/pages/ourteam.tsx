import React from 'react'
import {  profile, ragul , mani , nalini , abar , kani, suji , nagul ,laks , nik, deepak, kums , rashi, sreejumam, aparnarani, farhan, hari, shagana , prithu , kirubashini , praveena , kavya, nandy, shru} from '../images/team'
import Image from 'next/image'
import { instagram, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';


const headDetails = [
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
        name: 'Dr Sreejana S - Faculty Co-ordinator',
        image: sreejumam,
        year: "English Department",
        linkedin: 'https://www.linkedin.com/in/dr-sreejana-sasikumar-76201a179/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',
    },
    
    
]

const docDetails = [
    {
        name: 'Rasheqqa A A Treasurer',
        image: rashi,
        year: "III - CIVIL",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Nandhini V Executive Member',
        image: nandy,
        year: "II - E&I",
        linkedin: 'https://www.linkedin.com/in',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Kirubashini P Executive Member',
        image: kirubashini,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Praveena S Executive Member',
        image: praveena,
        year: "II - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]

const eventDetails = [
    {
        name: 'Nalini Priya D Secretary',
        image: nalini,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

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
        name: 'Kavya P Executive Member',
        image: kavya,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]

const facDetails = [
    {
        name: 'Karthik S Executive Member',
        image: profile,
        year: "II - IT",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Nagulan D Executive Member',
        image: nagul,
        year: "II - IT",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Sriram P K Executive Member',
        image: profile,
        year: "II - IT",
        linkedin: 'https://www.linkedin.com/in',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]

const regisDetails = [
    {
        name: 'Abarna V - Joint Secretary',
        image: abar,
        year: "III - CSE",
        linkedin: 'https://www.linkedin.com/in/abarnav',
        github: 'https://github.com/abarnavelusamy',
        instagram: 'https://www.instagram.com/abarna_0202',
    },
    {
        name: 'Sujithra I R Executive Member',
        image: suji,
        year: "II - CSE",
        linkedin: 'https://www.linkedin.com/in',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Prithika Executive Member',
        image: prithu,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Shruthi Executive Member',
        image: shru,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]

const marketDetails = [
    {
        name: 'Deepak R Executive Member',
        image: deepak,
        year: "III - IT",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',
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
        name: 'Nikhil V Visual Design Lead',
        image: nik,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]


const smDetails = [
    {
        name: 'Lakshan S Social Media Lead',
        image: laks,
        year: "III - EEE",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',
    },
    {
        name: 'Shaganasree P L Executive Member',
        image: shagana,
        year: "II - CSE",
        linkedin: 'https://www.linkedin.com/in/shaganashree-pl',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Aparna Rani P A Executive Member',
        image: aparnarani,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Mohamed Farhan P Executive Member',
        image: farhan,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
    {
        name: 'Hari Vignesh C K Executive Member',
        image: hari,
        year: "II - AI & DS",
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://www.instagram.com/',

    },
]

const websiteDetails = [
    {
        name: 'Ragul Adhithya M President',
        image: ragul,
        year: "III - IT",
        linkedin: 'https://www.linkedin.com/in/raguladhithyam/',
        github: 'https://github.com/raguladhithyam',
        instagram: 'https://www.instagram.com/ragul_2003/',
    },
    {
        name: 'Abarna V - Joint Secretary',
        image: abar,
        year: "III - CSE",
        linkedin: 'https://www.linkedin.com/in/abarnav',
        github: 'https://github.com/abarnavelusamy',
        instagram: 'https://www.instagram.com/abarna_0202',
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
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Head <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {headDetails.map((item) => (
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

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Doc & Media <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {docDetails.map((item) => (
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

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Events <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {eventDetails.map((item) => (
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

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Facilities <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {facDetails.map((item) => (
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


            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Marketing <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {marketDetails.map((item) => (
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

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Registration <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {regisDetails.map((item) => (
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

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Social Media <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {smDetails.map((item) => (
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
            

            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6">          
                    <div className="relative pt-36 ">
                        <div className="lg:w-2/3 text-center  mx-auto">
                            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-4xl">Website <span className="text-primary text-[#EACD69] text-4xl">Team.</span></h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {websiteDetails.map((item) => (
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