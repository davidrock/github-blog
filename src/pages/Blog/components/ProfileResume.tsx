import { FaGithub } from 'react-icons/fa6';
import { FaBuilding } from 'react-icons/fa6';
import { FaUserGroup } from 'react-icons/fa6';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export function ProfileResume() {
  return (
    <div className="flex gap-10 bg-base-profile py-8 px-10 rounded-2xl drop-shadow-lg">
      <img src="https://avatars.githubusercontent.com/u/19226926?v=4" className="rounded-xl w-[148px] h-[148px]" />
      <div className="flex flex-col gap-2">
        <h1>David Rock</h1>
        <p className="text-sm">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada
          suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <div className="flex gap-6 items-center mt-4">
          <div className="flex items-center gap-2">
            <FaGithub /> davidrock
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding /> Booking.com
          </div>
          <div className="flex items-center gap-2">
            <FaUserGroup /> 32 seguidores
          </div>
        </div>
        <div className="absolute right-10 flex flex-row text-xs">
          <a href="https://github.com" className="flex items-center gap-2">
            GITHUB
            <FaArrowUpRightFromSquare width={12} height={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
