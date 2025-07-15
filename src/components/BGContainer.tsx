interface Props {
  children: React.ReactNode;
  bg: string;
}
const BGContainer = ({ children, bg }: Props) => {
  return (
    <main
      className="bg-no-repeat bg-cover bg-right w-full h-screen py-[46px] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </main>
  );
};

export default BGContainer;
