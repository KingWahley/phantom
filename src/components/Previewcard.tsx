import React from "react";

interface CardProps {
  title: string;
  image: string;
  author: string;
  preview: string;
}

const PreviewCard: React.FC<CardProps> = ({
  title,
  image,
  author,
  preview,
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>

        {/* Author */}
        <p className="mb-4 text-sm text-gray-600">By {author}</p>

        {/* Preview Text */}
        <p className="line-clamp-3 text-base text-gray-700">{preview}</p>
      </div>
    </div>
  );
};

export default PreviewCard;
