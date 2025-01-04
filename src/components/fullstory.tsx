import React from "react";

interface FullStoryProps {
  title: string;
  image: string;
  author: string;
  content: string;
}

const FullStory: React.FC<FullStoryProps> = ({
  title,
  image,
  author,
  content,
}) => {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Header Section */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-800">{title}</h1>

        {/* Author */}
        <p className="mb-6 text-sm text-gray-600">By {author}</p>

        {/* Story Content */}
        <div className="whitespace-pre-line text-base leading-relaxed text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
};

export default FullStory;
