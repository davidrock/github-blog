import { BlogHeader } from './components/BlogHeader';
import { ProfileResume } from './components/ProfileResume';

export function Blog() {
  return (
    <div className="flex flex-col h-screen w-screen bg-base-background">
      <BlogHeader />
      <div className="container max-w-[1048px] mx-auto -mt-20 z-10">
        <ProfileResume />
      </div>
    </div>
  );
}
