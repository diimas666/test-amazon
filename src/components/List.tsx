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
    arrows: false, // 🔴 обязательно отключи встроенные
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
    <div className="relative w-full mx-auto">
      {/* Кастомные стрелки */}
      <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between items-center px-4 -translate-y-1/2 pointer-events-none">
        <div
          onClick={() => sliderRef.current?.slickPrev()}
          className="pointer-events-auto bg-white shadow-md rounded-full p-2 cursor-pointer"
        >
          <button className="w-[68px] h-[68px] rounded-full">
            <img src={arrowRight} alt="Previous" className="rotate-180" />
          </button>
        </div>
        <div
          onClick={() => sliderRef.current?.slickNext()}
          className="pointer-events-auto bg-white shadow-md rounded-full p-2 cursor-pointer"
        >
          <button  className="w-[68px] h-[68px] rounded-full">
            <img src={arrowRight} alt="Next" />
          </button>
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
