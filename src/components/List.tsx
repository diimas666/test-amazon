import Slider from 'react-slick';
import CommentCard from './CommentCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

// Кастомные стрелки
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );
};

const List = ({ comments }: ListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 11114000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
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
    <div className="relative w-full  mx-auto ">
      <Slider {...settings}>
        {comments.map((c) => (
          <div key={c.id}>
            <CommentCard
              name={c.name}
              position={c.position}
              imgName={c.imgName}
              description={c.description}
              image={c.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default List;
