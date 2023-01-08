import { List, ListItem, ListItemText, Divider, ListSubheader } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
  display: flex;
  flex-direction: row;
`

const PriceTagNumber = styled.div`
  font-weight: 600;
  color: #111827;
`

const PriceTagText = styled.div`
  font-weight: 400;
  color: #4B5563;
`

interface Products {
  createdAt: string;
  name: string;
  description: string;
  totalSales: number;
  id: number;
}

const LatestCustomers = () => {

  const [products, setProducts] = useState<Products[]>([])
  const maxShow = 6

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://633740935327df4c43d22bb2.mockapi.io/api/v1/products")
        setProducts(res.data.sort((a: Products, b: Products) => b.totalSales - a.totalSales))
      } catch (error) {
        console.log("n foi")
      }
    }
    getProducts()
  }, [])

  return (
    <Container>
      <List
        subheader={
          <ListSubheader component="div" id="top-products-subheader" sx={{fontWeight: "600", color:"#111827"}}>
            <h2>Top Products</h2>
          </ListSubheader>
        }>
        {products.slice(0, maxShow).map((item, i) =>
          <Line key={item.id}>
            <ListItem key={item.id}
              secondaryAction={
                <PriceTag>
                  <PriceTagNumber>
                    {Math.floor(item.totalSales)}  
                  </PriceTagNumber>
                  <PriceTagText>
                    &nbsp;sales
                  </PriceTagText>
                </PriceTag>
              }
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{fontWeight: "600", fontSize:"16px"}}
                secondary={item.name}
              />
            </ListItem>
            {i !== maxShow - 1 && <Divider component="li" variant="middle" />}
          </Line>
        )}
      </List>
    </Container>
  )
}

export default LatestCustomers