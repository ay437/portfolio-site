import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';
import CloseButton from '../CloseButton/CloseButton';
import Cover from '../Cover/Cover';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';
import ArticleBanner from '../ArticleBanner/ArticleBanner';
import MainLogo from '../MainLogo/MainLogo';
import Skills from '../Skills/Skills';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonial/Testimonial';

interface PageProps {
  name: string;
  closeButton: boolean;
}

const CardWrapper: FunctionComponent<PageProps> = (props: PageProps) => {
  const { name, closeButton } = props;
  return (
    <Box height="100%">
      <CloseButton closeButton={closeButton} />
      <Box>
        {() => {
          switch (name) {
            case 'intro':
              return <Intro title1="Hi there," title2="I'm Arjun" wave="👋" />;
            case 'article':
              return <ArticleBanner />;
            case 'logo':
              return <MainLogo />;
            case 'links':
              return <Links />;
            case 'cover':
              return <Cover title="I'M A PRODUCT DEVELOPER WITH A PASSION FOR UX DESIGN" />;
            case 'my skills':
              return <Skills />;
            case 'testimonials':
              return <Testimonials />;
            case 'clients':
              return <Clients />;
            default:
              return <Links />;
          }
        }}
      </Box>
    </Box>
  );
};

export default CardWrapper;
