interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return <main className="max-w-[1363px] mx-auto px-4 box-border">{children}</main>;
};

export default Container;
