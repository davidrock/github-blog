import { service } from '@services/axiosConfig';
import { useQuery } from 'react-query';
import { FaGithub } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa6';
import { FaUserGroup } from 'react-icons/fa6';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Profile } from '@models';
import { Loading } from '@components/Loading';

export function ProfileResume() {
  const { data, isFetched } = useQuery<Profile>(
    'profile',
    async () => {
      return (await service.get('/users/davidrock')).data;
    },
    { refetchInterval: false },
  );

  return (
    <div className="flex gap-10 bg-base-profile py-8 px-10 rounded-2xl drop-shadow-lg">
      {isFetched ? (
        <>
          <img src={data?.avatar_url} className="rounded-xl w-[148px] h-[148px]" />
          <div className="flex flex-col gap-2">
            <h1>{data?.name}</h1>
            <p className="text-sm">{data?.bio}</p>
            <div className="flex gap-6 items-center mt-4">
              <div className="flex items-center gap-2">
                <FaGithub /> {data?.login}
              </div>
              <div className="flex items-center gap-2">
                <FaBuilding /> {data?.company}
              </div>
              <div className="flex items-center gap-2">
                <FaUserGroup /> {data?.followers}
              </div>
            </div>
            <div className="absolute right-10 flex flex-row text-xs">
              <a href="https://github.com/davidrock" className="flex items-center gap-2">
                GITHUB
                <FaArrowUpRightFromSquare width={12} height={12} />
              </a>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
