import { Box, Button, Drawer } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Bell } from '../assets/svg/bell.svg'
import { ReactComponent as Search } from '../assets/svg/search.svg'
import { ReactComponent as MenuAltOne } from '../assets/svg/menu-alt-1.svg'
import Sidebar from './Sidebar';
import LogoPNG from '../assets/images/logo.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #E5E7EB;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
`;

const TopLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 33px;
  width: 35px;
  padding: 0px 20px;

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 900px) {
    padding: 0px 0px 0px 20px;
  }
`;

const SearchBar = styled.div`
  width: 25vw;
  background-color: #F9FAFB;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  padding: 5px;

  @media (max-width: 900px) {
    display: none;
  }
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
  padding-left: 10px;
`;

const TopRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
`;

const Header = () => {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, "left": open });
      };



  return (
    <Container>
      <TopLeft>
      <Logo src={LogoPNG} />
        <div>
          {(['left'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Box component={Button} onClick={toggleDrawer(true)} display={{lg: 'none'}}><MenuAltOne /></Box>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(false)}
              >
                <Sidebar />
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <SearchBar>
          <Search />
          <Input placeholder="Search" />
        </SearchBar>
      </TopLeft>
      <TopRight>
        <Bell />
        <Avatar alt="User Image" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg" sx={{ height: '30px', width: '30px', marginLeft: '10px' }} />
      </TopRight>
    </Container>
  )
};

export default Header;