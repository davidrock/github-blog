import { Input } from '@components/forms/Input';
import { BlogHeader } from './components/BlogHeader';
import { ProfileResume } from './components/ProfileResume';

export function Blog() {
  return (
    <div className="flex flex-col h-screen w-screen bg-base-background">
      <BlogHeader />
      <div className="container max-w-[1048px] mx-auto -mt-20 z-10">
        <ProfileResume />
        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-16 mb-6">
            <h3>Posts</h3>
            <span>6 posts</span>
          </div>
          <Input placeholder="Search content..." />
        </div>
      </div>
    </div>
  );
}
