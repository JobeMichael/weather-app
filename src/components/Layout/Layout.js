import React from "react";
import * as Styled from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <>
      <Styled.App>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Styled.App>
    </>
  );
};

export default Layout;
