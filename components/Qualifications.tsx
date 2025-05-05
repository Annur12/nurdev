import { useState } from "react";
import { qualifications } from "@/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Qualifications = () => {
  return (
    <section id="qualifications" className="pt-40 pb-20">
      <h1 className="text-xl md:text-2xl lg:text-[28px]">
        What I&apos;ve Accomplished
      </h1>
      <p className="mt-6 text-gray-400 text-[16px] max-w-xl">
        In this section you&apos;ll find a summary of my practical experience,
        formal education, and technical certifications.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {qualifications.map((section) => (
          <QualificationSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
};

const QualificationSection = ({ section }) => {
  const [expanded, setExpanded] = useState(false);
  const initialItemsToShow = 2;
  const itemsToDisplay = expanded
    ? section.items
    : section.items.slice(0, initialItemsToShow);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-neutral-800 group-hover:border-blue-500 transition-colors duration-300">
        {section.title}
      </h2>

      <div className="space-y-6">
        {itemsToDisplay.map((item, index) => (
          <QualificationItem key={index} item={item} />
        ))}
      </div>

      {section.items.length > initialItemsToShow && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
        >
          {expanded ? (
            <>
              <span>Show Less</span>
              <FaChevronUp className="h-3 w-3" />
            </>
          ) : (
            <>
              <span>
                Show More ({section.items.length - initialItemsToShow} more)
              </span>
              <FaChevronDown className="h-3 w-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

const QualificationItem = ({ item }) => {
  return (
    <div className="relative border-l-2 border-neutral-700 hover:border-blue-500 transition-colors duration-200 pl-5 py-1">
      <div className="absolute -left-[7px] -top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-neutral-600 group-hover:border-blue-400 transition-colors duration-300"></div>

      <div className="ml-2">
        <h3 className="font-medium text-neutral-100 hover:text-blue-400 transition-colors duration-200">
          {item.degree || item.role || item.name || item.subtitle}
        </h3>

        <p className="text-neutral-400 text-sm mt-1">
          {item.institution || item.company || item.issuer}
          {item.duration && (
            <span className="ml-2 text-neutral-500">• {item.duration}</span>
          )}
        </p>

        <ul className="text-gray-400 text-sm mt-2 space-y-1">
          {item.details.map((detail: string, i: number) => (
            <li
              key={i}
              className="relative pl-4 before:absolute before:left-1 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-400"
            >
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-3 space-y-2">
          {item.technologies && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-neutral-800/60 text-xs px-2 py-1 rounded hover:bg-blue-900/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {item.link && (
            <a
              href={item.link}
              className="inline-block text-xs text-blue-400 hover:text-blue-300 mt-1 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
