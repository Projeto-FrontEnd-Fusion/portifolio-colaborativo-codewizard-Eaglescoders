import PropTypes from "prop-types"
import { BsFillEraserFill } from "react-icons/bs"

export const ResetButton = ({
  cleanData
}) => {
  return (
    <>
      <button
        type="reset"
        className="gap-2 rounded-lg w-full h-9 text-purple-1 dark:text-white-1 cursor-pointer border border-blue-1 p-2.5 flex items-center justify-center font-inter"
        onClick={cleanData}
      >
        <BsFillEraserFill /> Limpar
      </button>
    </>
  )
}
ResetButton.propTypes = {
  cleanData: PropTypes.func
};