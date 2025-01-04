import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-purple-600 to-blue-800 px-6 py-20 text-white">
        {/* Background Image (visible on desktop) */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center opacity-50 md:block"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaKrP1vMjo-myode9l399sTiu3XsK92zyAw&s')", // Replace with your image path
          }}
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Where Words Weave Magic and Stories Come Alive
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-gray-200 md:text-xl">
            Step into a world where imagination knows no bounds. Discover poems
            that stir your soul and tales that ignite your dreams.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#start-reading"
              className="rounded-md bg-yellow-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-yellow-600"
            >
              Start Reading
            </a>
            <a
              href="#share-your-work"
              className="rounded-md border border-yellow-500 bg-transparent px-6 py-3 text-lg font-medium text-yellow-500 transition hover:bg-yellow-600 hover:text-black"
            >
              Share Your Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
