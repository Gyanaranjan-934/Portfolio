import { Element } from 'react-scroll';

const Education = () => {
  return (
    <Element name='education' className="py-12 bg-gray-100">
      <h1 className=" mb-12 text-4xl font-bold underline  text-center">
        My Education
      </h1>

      <div className="relative ">
        {/* Timeline */}
        <div className="absolute h-full border-2 border-gray-400 left-1/2 transform -translate-x-1/2"></div>

        {/* Nodes */}
        <div className="flex justify-start pl-32 items-start mt-2">
          <div className="flex flex-col items-start text-center w-1/2 p-2">
            <div className="bg-orange-400 hover:bg-orange-500 rounded-lg shadow-lg m-1 p-3">
              <h1 className="text-white font-semibold">2021-2024</h1>
              <h1 className="text-white text-ellipsis font-bold">Master of Computer Application</h1>
              <h2 className="text-white font-semibold">National Institute of Technology Calicut</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-32 items-start mt-2">
          <div className="flex flex-col items-end text-center w-1/2 pl-4">
            <div className="bg-purple-400 hover:bg-purple-500 rounded-lg shadow-lg m-1 p-3">
              <h1 className="text-white font-semibold">2017-2020</h1>
              <h1 className="text-white text-ellipsis font-bold">Bachelor of Science - Chemistry</h1>
              <h2 className="text-white font-semibold">Bhadrak Autonomous College, Odisha</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-start pl-32 items-start mt-2">
          <div className="flex flex-col items-start text-center w-1/2 p-2">
            <div className="bg-green-400 hover:bg-green-500 rounded-lg shadow-lg m-1 p-3">
              <h1 className="text-white font-semibold">2015-2017</h1>
              <h1 className="text-white text-ellipsis font-bold">Higher Secondary Education</h1>
              <h2 className="text-white font-semibold">Council of Higher Secondary Education, Odisha</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-32 items-start mt-2">
          <div className="flex flex-col items-end text-center w-1/2 pl-4">
            <div className="bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg m-1 p-3">
              <h1 className="text-white font-semibold">2015</h1>
              <h1 className="text-white text-ellipsis font-bold">Secondary Education</h1>
              <h2 className="text-white font-semibold">Board of Secondary Education, Odisha</h2>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
