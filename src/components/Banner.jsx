import bannerImage from '../assets/new_white_bg.png'
import bannerBackground from '../assets/banner_wallpaper-c69a5953.svg'
import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import Typed from 'typed.js';
const Banner = () => {
    const el = useRef(null);
    useEffect(() => {
        const strings = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

        const options = {
            strings: strings,
            startDelay: 25,
            typeSpeed: 75,
            backSpeed: 50,
            backDelay: 100,
            onComplete: (self) => {
                // Reset Typed instance on completion of typing all strings
                self.reset();
            },
        };
        const typed = new Typed(el.current, options);

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <Element name="home" style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: 'cover'
        }} className="main-container flex items-center">
            <div className="w-full items-center text-white flex justify-center">
                {/* text */}
                <div className="w-2/3 pb-5 space-y-3 ms-10">
                    <h3 className='mt-4 text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='mt-4 text-5xl font-bold'>Gyanaranjan Sahoo</h1>
                    <h2 className='mt-4 text-3xl'>And I am a <span ref={el} className='font-bold'></span></h2>
                    <p className='mt-4 mb-4'>Passionate about tech and innovation, I&apos;m driven by relentless curiosity and a commitment to excellence. With a solid computer science foundation, I navigate coding challenges with creativity, evolving as a tech enthusiast.</p>
                    <div className="mb-2 text-gray-200 space-x-10 icons-container">
                        <a href="https://www.linkedin.com/in/gyanaranjan-sahoo-a5792a1a4/" rel="noreferrer" target='_blank'><i className="fa-brands fa-linkedin text-4xl "></i>
                        </a>
                        <a href="https://github.com/Gyanaranjan-934" rel="noreferrer" target='_blank'><i className="fa-brands fa-github text-4xl "></i></a>
                        <a href="https://www.hackerrank.com/profile/gyanaranjansaho2" rel="noreferrer" target='_blank'><i className="fa-brands fa-hackerrank text-4xl "></i></a>
                        <a href="https://www.instagram.com/gyana_853/" rel="noreferrer" target='_blank'><i className="fa-brands fa-instagram text-4xl "></i></a>
                        <a href="https://www.facebook.com/crystalgudun.gudun/" rel="noreferrer" target='_blank'><i className="fa-brands fa-facebook text-4xl "></i></a>
                    </div>
                    <br />
                    <a href='mailto:gyanaranjansahoo509@gmail.com' rel='noreferrer' target='_blank' className='mt-2 text-white px-3 py-2 hover:bg-orange-400 bg-orange-500 rounded-full'>Contact Me</a>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img className='h-80 w-50 rounded-full shadow-lg' src={bannerImage} alt="bannerImage" />
            </div>
        </Element>
    )
}

export default Banner