import React from 'react'
import { image4, image15, image10 } from '../images/gallery'
import Image from 'next/image'
import lol from '../images/lol.jpg';
import { useRouter } from 'next/router';
import NavMenu from '@/components/NavMenu';


const About = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <div>
            {showNav && <NavMenu />}
            <div className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white">
                <div className="container mx-auto">
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative  ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"></span></h1>
                                <h3>Land of Lexicons</h3>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">

                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                {/* <div className="w-full px-3 sm:px-4 xl:w-1/2"> */}
                                <div className="relative z-10 my-4 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter">
                                    <div className="pl-250">
                                        <Image
                                            src={lol}
                                            alt=""
                                            className="h-[400px] rounded-2xl w-[400px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">

                                <p className="text-body-color text-justify mb-8 text-lg">
                                Land of Lexicons - An Vocab Enrichment Club of KUMARAGURU INSTITUTIONS is dedicated to elevating students' linguistic prowess. Our innovative approach integrates vocabulary building through memes, dynamic events, and diverse activities to fortify English proficiency, build confidence with LSRW skills and excel in language assessments.                             </p>

                            </div>
                        </div>
                    </div>
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative pt-36 ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Yensplash.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">
                        <div className="w-full lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">


                                <p className="text-body-color mb-8 text-justify text-base">
                                Linguathon, an annual one-day intercollegiate event, is a celebration of language and literature organized by Land of Lexicons Club - Kumaraguru Institutions. The event features a variety of engaging quizzes, trivia games, debates, slam poetry sessions, and storytelling sessions, all designed to challenge and inspire participants. Linguathon provides a platform for students to showcase their linguistic skills, explore the depths of literature, and discover the transformative power of language. The event is open to students from all colleges and universities, and it is sure to be an unforgettable experience for all who attend.
                                </p>

                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image15}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image4}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={image10}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About