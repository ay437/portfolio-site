import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Box } from '@material-ui/core';
import CardWrapper from '../Card/CardWrapper';
import Data from './CardLayoutData';

const ResponsiveGridLayout = WidthProvider(Responsive);

const baseStyle = {
  height: '100%',
  border: '2px solid #f2f2f2',
  borderRadius: '10px',
  background: '#fffdd0',
};

const wrapperStyle = {
  height: '100%',
  border: '2px solid transparent',
  borderRadius: '10px',
  background: 'transparent',
};

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function CardLayout(props) {
  const { altLayout } = props;
  const layouts = {
    lg: altLayout ? Data.layout3 : Data.layout1,
    md: altLayout ? Data.layout3 : Data.layout1,
    sm: altLayout ? Data.layout3 : Data.layout2,
    xs: Data.layout3,
    xxs: Data.layout3,
  };
  return (
    <div>
      <ResponsiveGridLayout
        {...props}
        className="layout"
        layouts={layouts}
        breakpoints={{
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0,
        }}
        cols={{
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
          xxs: 12,
        }}
      >
        <Box key="a" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="info" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="b" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="interest" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="c" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="hello" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="d" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="links" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="e" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="work" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="f" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="My skills" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="g" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="Testimonials" />
            </Box>
          </FadeInSection>
        </Box>
        <Box key="h" style={wrapperStyle}>
          <FadeInSection>
            <Box style={baseStyle}>
              <CardWrapper name="Get in touch" />
            </Box>
          </FadeInSection>
        </Box>
      </ResponsiveGridLayout>
    </div>
  );
}

CardLayout.defaultProps = {
  className: 'layout',
  margin: [30, 30],
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2,
  },
  altLayout: false,
};
