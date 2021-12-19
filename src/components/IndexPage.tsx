import Avatar from '@mui/material/Avatar';
import { Carousel } from 'antd';
import React from 'react';
import '../css/carousel-custom.scss';

import image_cover from '../image/cover.jpg';
import image_70 from '../image/70.jpg';
import image_cartoon from '../image/cartoon.png';
import image_juan from '../image/juan.jpg';
const contentStyle: React.CSSProperties = {
  color: '#fff',
  lineHeight: '160px',
  background: '#364d79',
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const CustomCarousel = () => {
  return (
    <div className="wrapper">
      <Carousel autoplay autoplaySpeed={2000}>
        <div>
          <img
            alt="img"
            src={image_cover}
            style={{ width: '800px', height: '600px' }}
          />
        </div>
        <div>
          <img
            alt="img"
            src={image_70}
            style={{ width: '800px', height: '600px' }}
          />
        </div>
        <div>
          <img
            alt="img"
            src={image_cartoon}
            style={{ width: '800px', height: '600px' }}
          />
        </div>
        <div>
          <img
            alt="img"
            src={image_juan}
            style={{ width: '800px', height: '600px' }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export const IndexPage = () => {
  return (
    <>
      <CustomCarousel />
    </>
  );
};
