import PropTypes from 'prop-types';

function Card({ src, alt, title }) {
  return (
    <div className="flex font-inconsolata">
      <div className="flex flex-col justify-center items-center gap-3 text-[#FFFFFF] w-[200px] h-[200px] bg-[#221C3E] rounded-2xl">
        <img src={src} alt={alt} className="rounded-full w-[100px] h-[100px]" />
        <h2 className="text-[24px] font-normal leading-[26px]">{title}</h2>
      </div>
    </div>
  );
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
