import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CardWrapper from '../Card/CardWrapper';
import Data from './CardLayoutData';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default class CardLayout extends React.Component {
    static defaultProps: { className: string; margin: number[]; cols: { lg: number; md: number; sm: number; xs: number; xxs: number; }; };
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: "lg"
        };
    }
    render() {
    const layouts = { lg: Data.layout1, md: Data.layout1, sm: Data.layout2, xs: Data.layout3, xxs: Data.layout3 };
    return (
        <div>
            <ResponsiveGridLayout
                {...this.props}
                className="layout" 
                layouts={layouts} 
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 12, sm: 12, xs: 12, xxs: 12}}
                >
                <div key="a"><CardWrapper name="info" /></div>
                <div key="b"><CardWrapper name="interest" /></div>
                <div key="c"><CardWrapper name="Hey there, I'm Arjun - a bit about me" /></div>
                <div key="d"><CardWrapper name="links" /></div>
                <div key="e"><CardWrapper name="My work" /></div>
                <div key="f"><CardWrapper name="My skills" /></div>
                <div key="g"><CardWrapper name="Testimonials" /></div>
                <div key="h"><CardWrapper name="Get in touch" /></div>
            </ResponsiveGridLayout>
        </div>
      );
    }
}

CardLayout.defaultProps = {
    className: "layout",
    margin:[30, 30],
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  };