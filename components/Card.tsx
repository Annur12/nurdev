import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {projects.map((item) => (
        <div
          key={item.id}
          className="lg:min-h-[28.5rem] h-[25rem] flex items-center justify-center sm:w-80 w-[70vw]"
        >
          <PinContainer title={item.title} href={item.link}>
            <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <Image src="/images/bg.png" alt="bgimg" fill />
              </div>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="z-10 absolute bottom-0 object-cover rounded-md"
              />
            </div>

            <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1">
              {item.title}
            </h1>

            <p
              className="lg:text-sm lg:font-normal font-light text-sm line-clamp-3"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.description}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {item.stacks.map((icon, index) => (
                  <div
                    key={index}
                    className="lg:w-12 lg:h-6 md:w-10 md:h-6 w-8 h-8 flex justify-center items-center mr-1 rounded-xl bg-neutral-800"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <span className=" lg:text-[12px] md:text-[10px] text-[8px] text-white">
                      {icon}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-md md:text-xs text-sm text-purple text-blue-400">
                  View Project
                </p>
                <CiLocationArrow1 className="text-lg ml-2" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default Card;
