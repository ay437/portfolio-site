import React, {
  useEffect, ReactChild, ReactChildren,
} from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Box } from '@material-ui/core';
import AOS from 'aos';
import CardWrapper from '../Card/CardWrapper';
import LayoutData from './LayoutGridData';
import ContentData from './LayoutContentData';

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface Children {
  children: ReactChild | ReactChildren;
}

export interface AltLayout {
  altLayout: boolean;
}

export default function Layout(props: AltLayout) {
  const contentData = ContentData;
  const { altLayout } = props;
  const { layout1, layout2, layout3 } = LayoutData;
  const layouts = {
    lg: altLayout ? layout3 : layout1,
    md: altLayout ? layout3 : layout1,
    sm: altLayout ? layout3 : layout2,
    xs: layout3,
    xxs: layout3,
  };

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <ResponsiveGridLayout
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        margin={[30, 30]}
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
        {contentData.map((sectionData) => (sectionData.dataAos !== 'fade-in'
          ? (
            <div
              key={sectionData.id}
              className={`fade-in ${sectionData.style}`}
            >
              <Box height="100%" border="2px solid #f2f2f2" borderRadius="16px" bgcolor="#fffdd0">
                <CardWrapper name={sectionData.name} />
              </Box>
            </div>
          )
          : (
            <div
              key={sectionData.id}
              data-aos={sectionData.dataAos}
            >
              <Box height="100%" border="2px solid #f2f2f2" borderRadius="16px" bgcolor="#fffdd0">
                <CardWrapper name={sectionData.name} />
              </Box>
            </div>
          )))}
      </ResponsiveGridLayout>
    </div>
  );
}