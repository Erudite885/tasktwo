
import { Header, SideNav } from "..";


type ILayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: ILayoutProps) {
  return (
    <div className="grid w-full grid-flow-col grid-cols-[max-content_auto]">
      <SideNav />
      <div className="flex min-h-screen flex-col items-center justify-between w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;

