interface CommentCardProps {
  image: string;
  imgName: string;
  name: string;
  position: string;
  description: string;
  quote: string;
}
const CommentCard = ({
  image,
  name,
  position,
  description,
  imgName,
  quote,
}: CommentCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white! box-border w-[380px] h-[502px] rounded-[12px] p-[49px] border-1 border-[#B6B1B1]">
      <div>
        <img src={image} alt={name} />
      </div>
      <p className="relative text-[#9B9A99] leading-[35px] max-w-[317px] pr-10 min-h-[120px]">
        {description}
        <img
          src={quote}
          alt="quote"
          className="absolute right-0 bottom-0 w-6 h-6 opacity-40"
        />
      </p>

      <div className="flex items-top gap-[16px] ">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img
            src={imgName}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[227px]">
          <h4 className="text-[24px] m-[0] font-bold leading-[35px]">{name}</h4>
          <p className="m-[0] text-[20px] font-semibold  leading-[28px]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
