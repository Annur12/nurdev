import { keyTakeways } from "@/data";
import { HoverBorderGradient } from "./ui/HoverBorder";
import Link from "next/link";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";

const IndustryVisit = () => {
  return (
    <section id="industryVisits" className="pt-40 pb-20">
      <h1 className="text-xl md:text-2xl lg:text-[28px]">
        What I&apos;ve Experienced
      </h1>
      <p className="mt-6 text-gray-400 text-[16px] max-w-xl">
        Exploring the real world of tech and industry — this visit gave me new
        insights and inspiration.
      </p>

      <div className="space-y-12 mt-6">
        <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 shadow-sm">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className="text-lg font-semibold text-neutral-100">
                Journey Through Industries
              </h2>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pl-4">
              Through our 8-day industry visit, I gained a deeper understanding
              of how history, technology, and national development are all
              interconnected. Exploring historical sites like Rizal Park, Fort
              Santiago, and the Quezon Memorial Circle enriched my appreciation
              of our nation’s past and heroes. Meanwhile, our visits to the
              Subic Bay Freeport Zone, Former US Naval Base, and government
              agencies such as the MMDA, BSP, and LRT Line 2 Operations Center
              provided real-world insight into how technology and systems are
              used to maintain national security, transportation, and economic
              stability. Experiencing operations firsthand—like monitoring
              systems, software applications, and even virtual reality at
              HyTech—showed me the crucial role of innovation in various
              industries. The visit also allowed us to connect with nature and
              culture through museums and scenic spots, making the entire
              experience both educational and inspiring.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className="text-lg font-semibold text-neutral-100">
                Key Takeways
              </h2>
            </div>
            <ul className="space-y-3 pl-4">
              {keyTakeways.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-neutral-300 relative pl-5 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
              <h2 className="text-lg font-semibold text-neutral-100">
                Reflections
              </h2>
            </div>
            <div className="p-4 bg-neutral-800/30 rounded-lg border-l-4 border-blue-500/80">
              <p className="text-sm text-neutral-300 italic">
                The industry visit made us realize how complex and
                interconnected different sectors are in keeping a country
                running—from protecting the past (museums) to managing the
                present (MMDA, BSP) and preparing for the future (HyTech, LRT
                systems). It was eye-opening to see the contrast between
                traditional historical landmarks and modern tech-driven
                industries, proving that both are essential in nation-building.
                We felt inspired and grateful to have had this rare opportunity
                to step out of the classroom and step into real, working
                environments that gave us a glimpse of the professional world.
                Personally, the experience sparked new curiosity—not only about
                how things work but also about how we, as students, can
                contribute to the country someday.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square relative rounded-lg overflow-hidden border border-neutral-800 group"
            >
              <Image
                src={`/images/tour-${i}.jpg`}
                alt={`Tour highlight ${i}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs text-neutral-300">
                  Day {i} Highlight
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <HoverBorderGradient
            duration={1}
            clockwise={false}
            className="flex items-center justify-center"
          >
            <Link
              target="_blank"
              className="text-sm text-white-200"
              href="https://nur-blogapp-mnh7v7hp0-annols-projects.vercel.app/"
            >
              View Full Tour
            </Link>
            <CiLocationArrow1 className="ml-2" />
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
};

export default IndustryVisit;
