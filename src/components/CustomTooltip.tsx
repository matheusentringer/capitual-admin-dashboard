import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: #0E9F6E;
  width: 10px;
  height: 10px;
`

const SalesContainer = styled.div`
  display: flex;
  align-items: center;
`

const SalesText = styled.p`
  font-size: 20px;
  padding: 0px 10px;
`

const ValorText = styled.p`
  font-weight: 600;
  font-size: 20px;
`

const DateText = styled.p`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 5px;
`

const formatDate = (tickItem: any) => {
  let date = new Date(tickItem);
  return date.toLocaleString('en-US', { timeZone: 'UTC', month: 'short', day:'numeric', year: 'numeric' });
}

const CustomTooltip = ({ active, payload, label } : any) => {
  if (active && payload && payload.length) {
    return (
      <Container>
        <DateText>{`${formatDate(label)}`}</DateText>
        <SalesContainer>
          <Dot />
          <SalesText>Sales: </SalesText>
          <ValorText>{`$${payload[0].value}`}</ValorText>
        </SalesContainer>
      </Container>
    );
  }

  return null;
};

export default CustomTooltip