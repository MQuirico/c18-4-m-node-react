import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center  h-[10vh] ">
      <div className='w-full h-2/5 flex justify-end items-center p-4 bg-lightPurple text-gray-400'>
        <div className="flex space-x-4">
          <a href="#" className='flex justify-center items-center'>
            <img src="/src/images_Home/libro_footer.svg" className='w-auto h-[70%]' alt="Icon 1" />
          </a>
          <a href="#" className='flex justify-center items-center'>
            <img src="/src/images_Home/apilados.svg" className='w-auto h-[70%]' alt="Icon 2" />
          </a>
          <a href="#" className='flex justify-center items-center'>
            <img src="/src/images_Home/templo.svg" className='w-auto h-[70%]' alt="Icon 3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
