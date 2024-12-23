import PropTypes from "prop-types"

export const TeamButton = ({text, onClick}) => {
  return (
    <span 
        onClick={onClick}   
        className="bg-rodape-0 p-1 w-[197px] rounded h-[35px] text-white-2">
        {text}
    </span>
  )
}
TeamButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};