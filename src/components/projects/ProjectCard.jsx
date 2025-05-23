import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const ProjectCard = ({ name, image, description, url, tools }) => {
  // Verifica si la pantalla es pequeña
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  // Estado para controlar el hover
  const [isHovered, setIsHovered] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (isHovered && !hasTyped) {
      setHasTyped(true);
    }
  }, [isHovered, hasTyped]);

  return (
    <div
      className="h-full w-full rounded-lg overflow-hidden shadow-md bg-gray-200 border-2 border-white my-2 group relative"
      // Manejo de eventos de hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="group">
        {/* Imagen - Se mantiene en su lugar */}
        <img
          src={image}
          alt={name}
          className="w-full h-20 sm:h-20 md:h-35 md:scale-140 object-contain my-3 transform md:rotate-340 transition-all duration-300 md:group-hover:rotate-360 md:group-hover:scale-110 relative top-0 left-0 z-0"
        />

        <div className="w-full bg-black p-3 m-0 relative z-10">
          {/* Nombre del proyecto */}
          <div className="md:flex md:flex-row sm:flex-col justify-between items-center">
            <h2 className="text-base sm:text-base md:text-xl font-extrabold text-left scale-95 text-white transition-all duration-300 group-hover:scale-100">
              {name}
              {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:h-1"></span> */}
            </h2>

            {/* Mostrar las herramientas a la derecha */}
            <div className="flex space-x-2">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-full p-1 transform transition-all duration-300 group-hover:scale-110"
                >
                  <img
                    src={tool}
                    alt={`tool-${index}`}
                    className="w-3 h-3 sm:w-3 sm:h-3 md:w-6 md:h-6 object-contain rounded-full transition-all duration-300 group-hover:scale-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <p className="text-left min-h-2 sm:min-h-3 md:min-h-6 font-normal text-gray-200 mt-2">
            {isSmallScreen ? (
              <span className="text-sm">{description}</span>
            ) : hasTyped ? (
              <TypeAnimation
                sequence={[description]}
                wrapper="span"
                speed={100}
                cursor={false}
                repeat={0}
                className="text-base"
              />
            ) : null}
          </p>
        </div>

        <div className="w-full bg-gray-900 p-3 m-0 flex align-middle">
          {/* Botón "Ver más" */}
          <p className="text-left text-gray-200 inline-block font-bold relative italic">
            Ver más &rarr;
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
