import { BlogHeader } from '@pages/Blog';
import Scrollbars from 'rc-scrollbars';
import { Item } from '../../models/issue.interface';
import { Title } from './components/Title';

type PostProps = {
  post?: Item;
};

export function Post({ post }: PostProps) {
  return (
    <div className="flex flex-col w-full bg-base-background">
      <Scrollbars autoHideDuration={200} autoHideTimeout={1000} style={{ width: '100%', height: '100vh' }}>
        <BlogHeader />
        <div className="container max-w-[1048px] mx-auto -mt-20 z-10">{post && <Title post={post} />}</div>
      </Scrollbars>
    </div>
  );
}
