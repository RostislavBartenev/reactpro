import React from 'react';

interface HeadingProps {
  tag: string;
}

const Heading: React.FC<HeadingProps> = ({ children, tag }) => {
  const HeadingTag: any = tag;

  return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
