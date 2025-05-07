"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qualifications } from "@/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type QualificationItemType = {
  degree?: string;
  role?: string;
  name?: string;
  subtitle?: string;
  institution?: string;
  company?: string;
  issuer?: string;
  duration?: string;
  details: string[];
  technologies?: string[];
  link?: string;
  image?: string;
};

type QualificationSectionProps = {
  section: {
    id: string | number;
    title: string;
    items: QualificationItemType[];
  };
};

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

const QualificationSection = ({ section }: QualificationSectionProps) => {
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

const QualificationItem = ({ item }: { item: QualificationItemType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Qualification Item */}
      <div className="relative border-l-2 border-neutral-700 hover:border-blue-500 transition-colors duration-200 pl-5 py-1 group">
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

          {item.details && item.details.length > 0 && (
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
          )}

          <div className="mt-3 space-y-2">
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="bg-neutral-800/60 text-xs px-2 py-1 rounded hover:bg-blue-900/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {item.image && (
              <div className="mt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="focus:outline-none text-left"
                >
                  <div className="relative max-w-[200px] rounded border border-neutral-700 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={item.image}
                      alt={`${item.degree || item.name} Certificate`}
                      width={400}
                      height={300}
                      className="object-cover"
                      quality={80}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                    />
                  </div>
                </button>
              </div>
            )}

            {item.link && (
              <Link
                href={item.link}
                className="inline-block text-xs text-blue-400 hover:text-blue-300 mt-1 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] max-h-[80vh]">
                <Image
                  src={item.image || ""}
                  alt={`${item.degree || item.name} Certificate - Full View`}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Qualifications;
