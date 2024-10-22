import useFetchData from '../../controller/useFetchData';
import Loader from './loader';
import TeamCard from './TeamCard';
export const Team = () => {
    const { data, error, loading } = useFetchData(import.meta.env.VITE_API_URL_GET_DADOS_CADASTRO);
  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">Tivemos um erro! Tente novamente mais tarde.</p>;

  return (
    <div>
      <div className='flex justify-center text-purple-1 dark:text-white-1 font-inconsolata mb-28'>
        <h3 className='text-sizeTitle'>Desenvolvedores</h3>
      </div>
      {data?.people.map((member) => (
        <TeamCard key={member.id} member={member} />

      ))}
    </div>
  )
}

