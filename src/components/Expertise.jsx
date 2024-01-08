import { Element } from "react-scroll";
import bannerBackground from "../assets/banner_wallpaper-c69a5953.svg";
const Expertise = () => {
    const skills = [
        { 
            name: "Java(Core)",
            id:1,
        },
        { 
            name: "Javascript",
            id:2,
        },
        { 
            name: "Python",
            id:3,
        },
        { 
            name: "ReactJS",
            id:4,
        },
        { 
            name: "NodeJS",
            id:5,
        },
        { 
            name: "ExpressJS",
            id:6,
        },
        { 
            name: "MongoDB",
            id:7,
        },
        { 
            name: "Django",
            id:8,
        },
        { 
            name: "MySQL",
            id:9,
        },
        { 
            name: "Tailwind CSS",
            id:10,
        },
        { 
            name: "Bootstrap",
            id:11,
        },
        {
            name: "Git",
            id:12,
        },
        {
            name: "GitHub",
            id:13,
        },
        { 
            name: "Firebase",
            id:14,
        },
        { 
            name: "Android Studio",
            id:15,
        },
        {
            name: "Kotlin",
            id:16,
        },
        {
            name: "Data Analysis",
            id:18,
        },
        {
            name: "Machine Learning",
            id:17,
        }
    ]
  return (
    <>
      <Element name="expertise" className="mt-2">
        <h1 className=" mb-12 text-4xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p className="m-3">
              Versatile in Web Development with expertise in ReactJS, Node.js, and a strong focus on security. Renowned problem solver with a proven track record on various platforms.
              </p>
              <br />
              <a href="mailto:gyanaranjansahoo509@gmail.com" target="_blank" rel="noreferrer"className="animate-pulse text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              {skills.map((skill,id)=>(
              <p key={id} className="text-white bg-gray-400 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                {skill.name}
              </p>

              ))}
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Expertise;