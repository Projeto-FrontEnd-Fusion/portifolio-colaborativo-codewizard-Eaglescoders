import PropTypes from "prop-types";

const Card = ({ title, text, src, alt }) => {
  return (
    <div className="dark:bg-purple-2 shadow-cardShadow drop-shadow-none rounded-lg flex flex-col gap-2 p-8   w-medium h-extraSmall lg:gap-4 lg:h-larger">
      <h2 className="text-base font-bold flex gap-2.5 font-mulish dark:text-gray-2 lg:text-lg lg:gap-1.5">
        <img src={src} alt={alt} className="h-6" />
        {title}
      </h2>
      <p className="text-xs font-normal leading-mobile-medium dark:text-purple-3 font-mulish lg:text-desktop-extraMini lg:leading-desktop-larger">
        {text}
      </p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
