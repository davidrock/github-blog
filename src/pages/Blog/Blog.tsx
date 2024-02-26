import { Input } from '@components/forms/Input';
import { BlogHeader } from './components/BlogHeader';
import { ProfileResume } from './components/ProfileResume';
import { Scrollbars } from 'rc-scrollbars';
import { useQuery } from 'react-query';
import Markdown from 'react-markdown';
import { service } from '@services/axiosConfig';
import { Issue, Item } from '../../models/issue.interface';
import { formatDistanceToNow } from 'date-fns';
import { useNavigation } from 'react-router-dom';

export function Blog() {
  const navigation = useNavigation();
  const { data } = useQuery<Issue>('posts', async () => {
    const res = (await service.get('/search/issues?q=repo:davidrock/github-blog')).data;

    console.log(res);
    return res;
  });

  function handlePostClick(){
    navigation
  }

  return (
    <div className="flex flex-col w-full bg-base-background">
      <Scrollbars autoHideDuration={200} autoHideTimeout={1000} style={{ width: '100%', height: '100vh' }}>
        <BlogHeader />
        <div className="container max-w-[1048px] mx-auto -mt-20 z-10">
          <ProfileResume />
          <div className="flex flex-col">
            <div className="flex items-center justify-between mt-16 mb-6">
              <h3>Posts</h3>
              <span>{data?.total_count} posts</span>
            </div>
            <Input placeholder="Search content..." />
            <div className="grid grid-cols-2 gap-8 my-8">
              {data?.items.map((p: Item) => (
                <div key={p?.id} className="flex flex-col rounded-lg bg-base-post p-8 h-[416px] cursor-pointer">
                  <div className="flex justify-between mb-5">
                    <h1 className="text-lg w-2/3">{p.title}</h1>
                    <span className="text-xs">{formatDistanceToNow(p.updated_at, { addSuffix: true })}</span>
                  </div>
                  <div className="text-xs text-ellipsis overflow-hidden">
                    <Markdown>{p.body}</Markdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}
