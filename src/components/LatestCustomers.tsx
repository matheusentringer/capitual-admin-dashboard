import {
  List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, ListSubheader,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Line = styled.div`
`;

const PriceTag = styled.div`
  font-weight: 600;
  color: #111827;
`;

interface Users {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  lastPurchaseValue: string;
  lastPurchaseDate: string;
  id: number;
}

function LatestCustomers() {
  const [users, setUsers] = useState<Users[]>([]);
  const maxShow = 6;

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://633740935327df4c43d22bb2.mockapi.io/api/v1/users');
      setUsers(res.data.sort(
        (a: Users, b: Users) => {
          const dateA = new Date(a.lastPurchaseDate).valueOf();
          const dateB = new Date(b.lastPurchaseDate).valueOf();
          return dateB - dateA;
        },
      ));
    };
    getUsers();
  }, []);

  return (
    <Container>
      <List
        subheader={(
          <ListSubheader component="div" id="latest-customers-subheader" sx={{ fontWeight: '600', color: '#111827' }}>
            <h2>Latest Customers</h2>
          </ListSubheader>
        )}
      >
        {users.slice(0, maxShow).map((item, i) => (
          <Line key={item.id}>
            <ListItem
              key={item.id}
              secondaryAction={(
                <PriceTag>
                  $
                  {item.lastPurchaseValue}
                </PriceTag>
              )}
            >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ fontWeight: '600', fontSize: '16px' }}
                secondary={item.email}
              />
            </ListItem>
            {i !== maxShow - 1 && <Divider component="li" variant="middle" />}
          </Line>
        ))}
      </List>
    </Container>
  );
}

export default LatestCustomers;
