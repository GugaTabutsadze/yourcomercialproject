"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Features = () => {

  const icons = [
    {id: 1, src: "/images/padlock.png", alt: "padlock",
      headnline: "Generate strong passwords",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
    {id: 2, src: "/images/forms.png", alt: "forms",
      headnline: "Fill forms",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
    {id: 3, src: "/images/secure.png", alt: "secure",
      headnline: "Secure",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
    {id: 4, src: "/images/data.png", alt: "data",
      headnline: "Data",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
    {id: 5, src: "/images/transfer.png", alt: "transfer",
      headnline: "Transfer",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
    {id: 6, src: "/images/man.png", alt: "man",
      headnline: "Easy to use",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptate quis ducimus distinctio commodi similique ipsum accusantium pariatur neque deserunt error atque, fuga amet eveniet vero maxime, nemo earum? Nulla.'
    },
  ]
  const colors = [
    "bg-pink-100",
    "bg-lightGreen",
    "bg-lightBlue",
    "bg-lightYellow",
    "bg-red-100",
    "bg-orange-100"
  ]


  return (
    <div className='flex flex-col space-y-[100px] items-center gap-10 px-2  lg:px-32 mt-[200px]'>
      <div>
        <h1 className='text-6xl text-darkRed font-semibold '>Features</h1>
      </div>
      <div className="flex flex-col items-center px-4 lg:px-0 justify-center space-y-[70px]  gap-6">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.id}
            className={`flex flex-col items-center  md:w-[67%] bg-gray-100 p-6 rounded-lg 
                      ${colors[index]} ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }} 
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }} 
            transition={{ duration: 0.3 }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl font-semibold">{icon.headnline}</h2>
            <p className="text-center text-gray-700 font-semibold mt-2">{icon.text}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default Features;

