import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <div className="flex">
      <input
        {...props}
        className="flex h-10 px-4 py-5 w-full rounded-md bg-base-input text-sm transition-colors placeholder:text-base-label focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ring-blue disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
