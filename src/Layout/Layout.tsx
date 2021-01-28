import React, { ReactNode } from "react";
import "../component/style.css";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="Main">{children}</div>;
};

export default Layout;
