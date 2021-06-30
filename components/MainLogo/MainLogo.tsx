/* eslint-disable no-tabs */
import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

// const Sketch = dynamic(
//     () => import("react-p5"),
//     {
//         ssr: false
//     }
// )

function MainLogo() {
  //   let ballyX;
  //   let ballyXDirec;
  //   let ballyY;
  //   let ballyYDirec;
  //   let Color;
  //   let random255;

  //   const setup = (p5, canvasParentRef) => {
  //     p5.createCanvas(300, 300).parent(canvasParentRef);
  //     p5.background(0, 0, 0);
  //     ballyX = 250;
  //     ballyXDirec = 5;
  //     ballyY = 250;
  //     ballyYDirec = 3.2;
  // 	  Color = p5.random(255);
  // };

  // const draw = (p5) => {
  //   p5.background (0, 0, 0);
  // 	p5.fill (Color)
  //   p5.ellipse(ballyX, ballyY, 100);
  // 	ballyX = ballyX + ballyXDirec;
  // 	ballyY = ballyY + ballyYDirec;
  // 	if (ballyX >= 475) {
  // 		ballyXDirec = -5;
  // 		p5.fill (p5.random(255),p5.random(255),p5.random(255))
  // 	  Color += random255;
  // 	}
  // 	if (ballyX <= 25) {
  // 		ballyXDirec = 5;
  // 		p5.fill (p5.random(255),p5.random(255),p5.random(255))
  // 	  Color += random255;
  // 	}
  // 	if (ballyY >= 475) {
  //     ballyYDirec = -3.2;
  // 		p5.fill (p5.random(255),p5.random(255),p5.random(255))
  // 	  Color += random255;
  // 	}
  // 	if (ballyY <= 25) {
  // 		ballyYDirec = 3.2;
  // 		p5.fill (p5.random(255),p5.random(255),p5.random(255))
  // 	  Color += random255;
  // }
  // };
  return (
    <Box
      bgcolor="#000000"
      border="2px solid #000000"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      height="100%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Sketch setup={setup} draw={draw} /> */}
      <Image
        src="/ay-logo-white.png"
        alt="logo-white"
        width={120}
        height={204}
      />
    </Box>
  );
}

export default MainLogo;
