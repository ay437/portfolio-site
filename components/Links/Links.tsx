import React from 'react';
import Image from 'next/image';
import Data from './LinkData';

export interface LinkItem {
  name: string;
  url: string;
  logo: string;
}

export interface LinkProps {
  links: LinkItem[];
}

function Links() {
  const links = Data;
  return (
    <div>
      {links.map((link) => (
        <div key={link.id}>
          <a href={link.url}>
            <Image src={link.logo} alt={link.name} width={20} height={20} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Links;
