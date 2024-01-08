import { Element } from 'react-scroll';
import projects from '../assets/projects.json'
const Projects = () => {
    const projectsArr = projects.projects;
    const getGridSize = (index) => {
      // You can implement your logic to determine the size of each div based on its content or any other criteria.
      // For demonstration, I'm using a simple example where odd-indexed projects have a larger size.
      return index % 2 === 0 ? 'sm:col-span-1 md:col-span-2 lg:col-span-3' : 'sm:col-span-2 md:col-span-1 lg:col-span-2';
  };
  return (
    <>
      <Element name="project" className='py-12'>
        <h1 className="font-bold underline text-center text-4xl">My Projects</h1>
        <div className="mt-12 p-10 container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly mx-auto">
          {/* Adjust the classes based on your design */}
          {projectsArr.map((project, index) => (
            <div key={index} className="bg-slate-300 hover:bg-slate-200 p-4 rounded-lg text-center shadow-lg">
              <div className="flex justify-center"><img className='w-100 h-50' src={project.imagelink ? project.imagelink : "https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png"} alt="img" /></div>
              <h1 className='text-2xl m-2 underline  font-bold text-gray-700'>{project.name}</h1>
              <div className={`flex justify-center h-fit space-x-3 m-2 flex-wrap ${getGridSize(index)}`}>
                {project.technologies.map((technique, index) =>(
                    <p className="bg-gray-400 text-white cursor-pointer m-1 hover:bg-gray-500 rounded-lg p-1" key={index}>{technique}</p>
                ))}
              </div>
              <p>{project.description}<a className="underline text-blue-500" href="">Read More...</a></p>
              
              <br />
              <a className='mt-2 bg-orange-400 text-white rounded-lg p-3' rel='noreferrer' target='_blank' href={project.sourceCode}>Github</a>
              {project.demolink.length>0 && <a className='mt-2 bg-orange-400 rounded-full p-3' href={project.demolink}>Demo</a> }
            </div>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Projects;
