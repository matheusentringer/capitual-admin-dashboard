import Avatar from '@mui/material/Avatar';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Bell } from '../assets/svg/bell.svg'
import { ReactComponent as Search } from '../assets/svg/search.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #E5E7EB;
`;

const TopLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Logo = styled.img`
  height: 33px;
  width: 35px;
  padding: 0px 20px;
`;

const SearchBar = styled.div`
  width: 300px;
  background-color: #F9FAFB;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  padding: 5px;
`;

const Input = styled.input`
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: 90%;
  height: 20px;
  border: none;
  appearance: none;
  outline: none;
`;

const TopRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
`;

const Header = () => (
  <Container>
    <TopLeft>
      <Logo src="https://i.imgur.com/YPxLqnI.png" />
      <SearchBar>
        <Search />
        <Input placeholder="Search" />
      </SearchBar>
    </TopLeft>
    <TopRight>
      <Bell />
      <Avatar alt="User Image" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg" sx={{height: '30px', width: '30px', marginLeft: '10px'}} />
    </TopRight>
  </Container>
);

export default Header;