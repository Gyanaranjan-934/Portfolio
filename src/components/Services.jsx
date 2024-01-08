import { Element } from "react-scroll";

const Services = () => {
    const services = [
        { 
            serviceName: 'Full-Stack Development',
            icon_name: 'aws',
            description: 'Proficient in full-stack development with expertise in ReactJS and Node.js, ensuring seamless user experiences and robust backend functionality.',
            link: '/sevices/full-stack',
            id: 1
        },
        {
            serviceName: 'Frontend Development',
            icon_name: 'react',
            description: 'In frontend development, I excel in crafting dynamic user interfaces using cutting-edge technologies like ReactJS.',
            link: '/sevices/frontend',
            id: 2
        },
        {
            serviceName: 'Backend Development',
            icon_name: 'node-js',
            description: 'Expert in backend development using Node.js and Express.js, with proficiency in MySQL and MongoDB for efficient data management.',
            link: '/sevices/backend',
            id:3
        }
    ];
    return (
        <>
            <Element name="services" className="main-container py-12">
                <h1 className='text-4xl font-bold text-center underline'>My Services</h1>
                <div className="mt-4 services-container flex flex-wrap justify-center">
                    {services.map((service,id)=>(
                        <div key={id} className="shadow-lg text-center p-4 rounded-lg hover:bg-gray-100 bg-slate-200 m-4 max-w-sm">
                        <i className={`text-4xl fa-brands fa-${service.icon_name}`}></i>
                        <h1 className="text-3xl">{service.serviceName}</h1>
                        <p className="mb-2">{service.description}</p>
                        <a href={service.link} className='mt-3 bg-orange-500 px-3 py-1 text-sm sm:text-1xl text-white rounded-full shadow-lg'>Read More...</a>
                    </div>
                    ))}
                    
                </div>
            </Element>
        </>
    );
};

export default Services;
