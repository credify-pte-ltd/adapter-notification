import { PropsWithChildren, memo } from "react";

const Header = () => {
  return <></>;
};

const Footer = () => {
  return <></>;
};

const MainLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default memo(MainLayout);
