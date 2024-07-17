import Header from "@/components/Header/Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className=" max-width: 1280px;">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};
export default MainLayout;