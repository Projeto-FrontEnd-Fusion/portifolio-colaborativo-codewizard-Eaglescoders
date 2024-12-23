import { useMembersFetch } from "../../hooks/useMembers";
import Loader from "./loader";
import TeamCard from "./TeamCard";
export const Team = () => {
  const { data, isLoading, error } = useMembersFetch();
  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="text-red-500">
        Tivemos um erro! Tente novamente mais tarde.
      </p>
    );

  return (
    <div>
      <div className="flex justify-center text-purple-1 dark:text-white-1 font-inconsolata mb-28">
        <h3 className="text-sizeTitle">Desenvolvedores</h3>
      </div>
      {data?.people.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
};
