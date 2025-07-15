interface CommentCardProps {
  image: string;
  imgName: string;
  name: string;
  position: string;
  description: string;
}
const CommentCard = ({
  image,
  name,
  position,
  description,
  imgName,
}: CommentCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white box-border w-[380px] h-[502px] rounded-[12px] p-[49px] border">
      <div>
        <img src={image} alt={name} />
      </div>
      <p className="text-[#9B9A99] leading-[35px] max-w-[317px]">
        {description}
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
