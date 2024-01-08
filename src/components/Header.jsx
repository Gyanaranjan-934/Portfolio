import { Link as ScrollLink } from 'react-scroll';
import {Element} from 'react-scroll'
const Header = () => {
  const menuLinks = [
    {
      title: 'Home',
      link: 'home',
      id: '1',
    },
    {
      title: 'About',
      link: 'about',
      id: '2',
    },
    {
      title: 'Education',
      link: 'education',
      id: '3',
    },
    {
      title: 'Projects',
      link: 'project',
      id: '4',
    },
    {
      title: 'Services',
      link: 'services',
      id: '5',
    },
  ];
  const actonButton = {
    title: 'Hire Me',
    link: 'mailto:gyanaranjansahoo509@gmail.com',
  };

  return (
    <>
      <Element name="header" className="h-20 items-center border main flex justify-between px-16 bg-gray-100">
        <div className="">
          <h1 className="text-xl font-bold ">
            <ScrollLink to="home" smooth={true} duration={500}>
              Gyanaranjan Sahoo
            </ScrollLink>
          </h1>
        </div>
        <div className="space-x-6">
          {menuLinks.map((item, id) => (
            <ScrollLink key={id} to={item.link} smooth={true} duration={500} className="hover:text-orange-500 cursor-pointer">
              {item.title}
            </ScrollLink>
          ))}
          <a className="hover:text-orange-500 cursor-pointer" href="https://drive.google.com/file/d/1RiaMk5oBW5KqwynknfyBvXTr__V8TUGB/view?usp=sharing" target="_blank" rel="noreferrer"> Resume </a>
        </div>

        <div className="">
          <a className="animate-pulse px-3 py-2 text-1xl text-white rounded-full bg-orange-500" href={actonButton.link}>
            {actonButton.title}
          </a>
        </div>
      </Element>
    </>
  );
};

export default Header;
