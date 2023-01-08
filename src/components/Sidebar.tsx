import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { ReactComponent as DocumentReport } from '../assets/svg/document-report.svg'
import { ReactComponent as ShoppingBag } from '../assets/svg/shopping-bag.svg'
import { ReactComponent as InboxIn } from '../assets/svg/inbox-in.svg'
import { ReactComponent as LockClosed } from '../assets/svg/lock-closed.svg'
import { ReactComponent as ClipboardList } from '../assets/svg/clipboard-list.svg'
import { ReactComponent as Collection } from '../assets/svg/collection.svg'
import { ReactComponent as Support } from '../assets/svg/support.svg'
import { ReactComponent as ChartPie } from '../assets/svg/chart-pie.svg'
import { ListItemSecondaryAction } from '@mui/material';

const Container = styled.div`
  border-right: 1px solid #E5E7EB;
  height: calc(100vh - 60px);
  position: fixed;
  /* top: 60px; */
  left: 0;
  z-index: 998;
  background-color: white;
  width: 16.666%;

  @media (max-width: 900px) {
    width: 250px;
    height: 100vh;
  }
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #E5E7EB;
`

const StyledListItemText = styled(ListItemText)`
  font-size: 16px;
  font-weight: 500 !important;
`

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 45px !important;
`

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #FBD5D5;
  color: #9B1C1C;
  width: 20px;
  height: 20px;
  font-size: 14px;
`

const Sidebar = () => {
  
  const [openPages, setOpenPages] = React.useState(false);
  const [openSales, setOpenSales] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);

  const handleClickPages = () => {
    setOpenPages(!openPages);
  };

  const handleClickSales = () => {
    setOpenSales(!openSales);
  };

  const handleClickAuth = () => {
    setOpenAuth(!openAuth);
  };

  return (
    <Container>
      <List
        sx={{ width: '100%' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <StyledListItemIcon>
            <ChartPie />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Overview" sx={{color: "#0E9F6E"}} />
        </ListItemButton>

        <ListItemButton onClick={handleClickPages}>
          <StyledListItemIcon>
            <DocumentReport />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Pages" />
          {openPages ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openPages} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Product List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Billing" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Invoice" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickSales}>
          <StyledListItemIcon>
            <ShoppingBag />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Sales" />
          {openSales ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSales} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Product List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Billing" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Invoice" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <StyledListItemIcon>
            <InboxIn />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Messages" />
          <ListItemSecondaryAction>
            <Badge>1</Badge>
          </ListItemSecondaryAction>
        </ListItemButton>

        <ListItemButton onClick={handleClickAuth}>
          <StyledListItemIcon>
            <LockClosed />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Authentication" />
          {openAuth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAuth} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Product List" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Billing" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 2 }}>
              <StyledListItemText disableTypography inset primary="Invoice" />
            </ListItemButton>
          </List>
        </Collapse>

        <Separator/>
        
        <ListItemButton>
          <StyledListItemIcon>
            <ClipboardList />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Docs" />
        </ListItemButton>

        <ListItemButton>
          <StyledListItemIcon>
            <Collection />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Components" />
        </ListItemButton>

        <ListItemButton>
          <StyledListItemIcon>
            <Support />
          </StyledListItemIcon>
          <StyledListItemText disableTypography primary="Help" />
        </ListItemButton>
      </List>
  
    </Container>
  )
}

export default Sidebar