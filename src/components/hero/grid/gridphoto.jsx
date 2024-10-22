export const MemberPhotoGrid = ({ data }) => {
  return (
    <figure className="flex items-center justify-center ">
      <img
        src={data?.githubImgUrl}
        alt={data?.name}
        title={data?.name}
        className="w-24  rounded-2xl md:w-32 "
      />
    </figure>
  );
};
