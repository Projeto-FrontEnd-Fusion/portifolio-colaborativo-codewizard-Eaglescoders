import PropTypes from "prop-types";
import { FaSpinner, FaUser } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export const AvatarGithub = ({ avatarUrl }) => {
  if (!avatarUrl) {
    return <FaUser className="text-zinc-200" size={32} />;
  } else if (avatarUrl === "loading") {
    return <FaSpinner className="text-green-200 animate animate-spin" size={32} />;
  }else if(avatarUrl === "not-found"){
    return <MdDoNotDisturbAlt className="text-zinc-200" size={32} />;
  }else {
    return <img src={avatarUrl} alt="Avatar" />;
  }
};
AvatarGithub.propTypes = {
  avatarUrl: PropTypes.string,
};
