import { ReactNode, HTMLAttributes } from 'react';

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  color?: string; // Optional color prop
}

export const Heading1 = ({ children, color, ...props }: Heading1Props) => {
  return (
    <h1
      className={`text-[30px] font-[inter] font-bold leading-tight ${color}`}
      {...props} // Spread other props to the h1 element
    >
      {children}
    </h1>
  );
};

export const Heading2 = () => {
  return <div>Heading</div>;
};
