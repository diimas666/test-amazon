import Slider from 'react-slick';
import CommentCard from './CommentCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import arrowRight from '../assets/arrow-right.svg';

interface ListProps {
  comments: {
    id: number;
    name: string;
    position: string;
    description: string;
    image: string;
    imgName: string;
    quote: string;
  }[];
}

const List = ({ comments }: ListProps) => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 11114000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative max-w-[1200px] mx-auto w-full z-[20] ">
      {/* Кастомные стрелки */}
      <div className="absolute top-1/2 z-10 -translate-y-1/2 w-full">
        <div
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-[-70px] bg-white rounded-full w-[60px] h-[60px] shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition border"
        >
          <img src={arrowRight} alt="prev" className="rotate-180 w-6 h-6" />
        </div>

        <div
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-[-70px] bg-white rounded-full w-[60px] h-[60px] shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition border"
        >
          <img src={arrowRight} alt="next" className="w-6 h-6" />
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {comments.map((c) => (
          <div key={c.id}>
            <CommentCard {...c} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default List;
