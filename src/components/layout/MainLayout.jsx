import Header from '../commons/organisms/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
