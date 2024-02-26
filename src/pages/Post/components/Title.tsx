import { FaGithub, FaUserGroup, FaArrowUpRightFromSquare, FaCalendar, FaChevronLeft } from 'react-icons/fa6';
import { Item } from '../../../models/issue.interface';
import { formatDistanceToNow } from 'date-fns';

type ItemProps = {
  post: Item;
};

export function Title({ post }: ItemProps) {
  return (
    <div className="flex gap-10 bg-base-profile py-8 px-10 rounded-2xl drop-shadow-lg">
      <div className="flex">
        <div className="absolute right-10 flex flex-row text-xs">
          <a href="https://github.com/davidrock" className="flex items-center gap-2">
            Back
            <FaArrowUpRightFromSquare width={12} height={12} />
          </a>
        </div>
        <div className="absolute right-10 flex flex-row text-xs">
          <a href="https://github.com/davidrock" className="flex items-center gap-2">
            Go to Github
            <FaChevronLeft width={12} height={12} />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>{post?.title}</h1>
        <div className="flex gap-6 items-center mt-4">
          <div className="flex items-center gap-2">
            <FaGithub /> {post?.user.login}
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar /> {formatDistanceToNow(post.updated_at, { addSuffix: true })}
          </div>
          <div className="flex items-center gap-2">
            <FaUserGroup /> {post.comments} comments
          </div>
        </div>
      </div>
    </div>
  );
}
