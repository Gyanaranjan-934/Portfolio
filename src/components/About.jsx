import { Element } from 'react-scroll'
import bannerImage from '../assets/portfolio_samples.png'
const About = () => {

  return (
    <>
        <Element name="about" className="main-container bg-gray-100 border py-12">
            <h1 className='text-center pb-12 text-4xl font-bold underline'>About Me</h1>
            <div className="main-box-container flex justify-center">
                {/* Image */}
                <div className="w-full flex justify-center">
                    <img className="h-80 w-50 rounded-full shadow-lg" src={bannerImage} alt="bannerImage" />
                </div>
                <div className="w-full flex justify-center">
                    <div className="spave-y-5 w-2/3">
                    <h1 className="text-4xl font-semibold">Full Stack Developer and Machine Learning Engineer</h1>
                    <br />
                    <p>I am a skilled MCA student at NIT Calicut, excelling in full-stack web development with expertise in ReactJS, Node.js, and security. His impactful contributions to the full-stack projects reflect his commitment to seamless user experiences and real-time functionality.</p>
                    <br />
                    <p>A dynamic problem solver, Gyanaranjan boasts top rankings on HackerRank, LeetCode, and GeeksforGeeks. With an AIR-277 in NIMCET-2021, his tech prowess is complemented by strong soft skills, making him a valuable collaborator in the open-source community.</p>
                    <button className='mt-2 bg-orange-500 px-3 py-1 text-1xl text-white rounded-full shadow-lg'>Read More...</button>
                    </div>
                </div>
            </div>
        </Element>
    </>
  )
}

export default About