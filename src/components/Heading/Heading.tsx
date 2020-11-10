import React from 'react';

interface HeadingProps {
  tag: string;
  classNames: string;
}

const Heading: React.FC<HeadingProps> = ({ children, tag, classNames }) => {
  const HeadingTag: any = tag;

  return <HeadingTag classNames={classNames}>{children}</HeadingTag>;
};

export default Heading;
