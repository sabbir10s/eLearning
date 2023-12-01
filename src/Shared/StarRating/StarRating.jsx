// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current text-[#FF9B26]"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.45 5.02h5.55l-4 4.01 1.45 6.97L10 13.02l-5 3.96 1.45-6.97-4-4.01h5.55L10 1z"
          />
        </svg>
      ))}

      {hasHalfStar && (
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current text-gray-400/50 "
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.45 5.02h5.55l-4 4.01 1.45 6.97L10 13.02V1z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 fill-current text-[#FF9B26] absolute top-0 right-0 transform scale-x-[-1]"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.45 5.02h5.55l-4 4.01 1.45 6.97L10 13.02V1z"
            />
          </svg>
        </div>
      )}

      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current text-gray-300"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.45 5.02h5.55l-4 4.01 1.45 6.97L10 13.02l-5 3.96 1.45-6.97-4-4.01h5.55L10 1z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
