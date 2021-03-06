import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import BackButton from '../BackButton/BackButton';
import Cover from '../Cover/Cover';
import Intro from '../Intro/Intro';
import Links from '../Links/Links';
import ArticleBanner from '../ArticleBanner/ArticleBanner';
import MainLogo from '../MainLogo/MainLogo';
import Skills from '../Skills/Skills';
import Clients from '../Clients/Clients';
import Testimonials from '../Testimonial/Testimonial';
import About from '../About/About';
import Contact from '../Contact/Contact';

interface PageProps {
  name: string;
  backButton: boolean;
  blogOrWork: boolean;
}

const CardWrapper: FunctionComponent<PageProps> = (props: PageProps) => {
  const { name, backButton, blogOrWork } = props;
  return (
    <Box height="100%">
      <BackButton
        backButton={backButton}
        blogOrWork={blogOrWork}
        isBlogContentPage={false}
        isWorkContentPage={false}
      />
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
              return (
                <Cover title="I'M A PRODUCT DEVELOPER WITH A PASSION FOR UX DESIGN" />
              );
            case 'my skills':
              return <Skills />;
            case 'testimonials':
              return <Testimonials />;
            case 'clients':
              return <Clients />;
            case 'about me':
              return <About />;
            case 'contact me':
              return <Contact />;
            default:
              return <Links />;
          }
        }}
      </Box>
    </Box>
  );
};

export default CardWrapper;
