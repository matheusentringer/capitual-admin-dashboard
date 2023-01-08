import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 40px 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return (
    <Container>
      © 2021 Themesberg, LLC. All rights reserved.
    </Container>
  );
}

export default Footer;
