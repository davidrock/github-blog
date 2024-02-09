import { Input } from '@components/forms/Input';
import { BlogHeader } from './components/BlogHeader';
import { ProfileResume } from './components/ProfileResume';
import { Scrollbars } from 'rc-scrollbars';

export function Blog() {
  return (
    <div className="flex flex-col w-full bg-base-background">
      <Scrollbars autoHideDuration={200} autoHideTimeout={1000} style={{ width: '100%', height: '100vh' }}>
        <BlogHeader />
        <div className="container max-w-[1048px] mx-auto -mt-20 z-10">
          <ProfileResume />
          <div className="flex flex-col">
            <div className="flex items-center justify-between mt-16 mb-6">
              <h3>Posts</h3>
              <span>6 posts</span>
            </div>
            <Input placeholder="Search content..." />
            <div className="grid grid-cols-2 gap-8 my-8">
              <div className="flex flex-col rounded-lg bg-base-post p-8 h-[416px] cursor-pointer">
                <div className="flex justify-between mb-5">
                  <h1 className="text-lg w-2/3">Javascaript data types and data structures</h1>
                  <span className="text-xs">1 day ago</span>
                </div>
                <p className="text-xs text-ellipsis overflow-hidden">
                  Programming languages all have built-in data structures, but these often differ from one language to
                  another. This article attempts to list the built-in data structures available in JavaScript and what
                  properties they have. These can be used to build other data structures. Wherever possible, comparisons
                  with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.
                  Variables in JavaScript are not directly associated with any particular value type, and any variable
                  can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo =
                  'bar'; // foo is now a string foo = true; // foo is now a boolean
                </p>
              </div>
              <div className="flex flex-col rounded-lg bg-base-post p-8 h-[416px] cursor-pointer">
                <div className="flex justify-between mb-5">
                  <h1 className="text-lg w-2/3">Javascaript data types and data structures</h1>
                  <span className="text-xs">1 day ago</span>
                </div>
                <p className="text-xs text-ellipsis overflow-hidden">
                  Programming languages all have built-in data structures, but these often differ from one language to
                  another. This article attempts to list the built-in data structures available in JavaScript and what
                  properties they have. These can be used to build other data structures. Wherever possible, comparisons
                  with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.
                  Variables in JavaScript are not directly associated with any particular value type, and any variable
                  can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo =
                  'bar'; // foo is now a string foo = true; // foo is now a boolean
                  Programming languages all have built-in data structures, but these often differ from one language to
                  another. This article attempts to list the built-in data structures available in JavaScript and what
                  properties they have. These can be used to build other data structures. Wherever possible, comparisons
                  with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.
                  Variables in JavaScript are not directly associated with any particular value type, and any variable
                  can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo =
                  'bar'; // foo is now a string foo = true; // foo is now a boolean
                  Programming languages all have built-in data structures, but these often differ from one language to
                  another. This article attempts to list the built-in data structures available in JavaScript and what
                  properties they have. These can be used to build other data structures. Wherever possible, comparisons
                  with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.
                  Variables in JavaScript are not directly associated with any particular value type, and any variable
                  can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo =
                  'bar'; // foo is now a string foo = true; // foo is now a boolean
                  Programming languages all have built-in data structures, but these often differ from one language to
                  another. This article attempts to list the built-in data structures available in JavaScript and what
                  properties they have. These can be used to build other data structures. Wherever possible, comparisons
                  with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language.
                  Variables in JavaScript are not directly associated with any particular value type, and any variable
                  can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo =
                  'bar'; // foo is now a string foo = true; // foo is now a boolean
                </p>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}
