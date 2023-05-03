import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = ({ href, children, ...other }: Props) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
