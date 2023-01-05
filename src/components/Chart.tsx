import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid } from 'recharts'
import styled from 'styled-components';
import { ReactComponent as ExclamationCircle } from '../assets/svg/exclamation-circle.svg'

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h2`
  padding-right: 10px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px 20px 20px;
  width: 100%;
`

const Chart = () => {

  const [sales, setSales] = useState<any[]>([])

  useEffect(() => {
    const getSales = async () => {

      try {
        const today = new Date('2022-09-23')
        const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
        const res = await axios.get("https://633740935327df4c43d22bb2.mockapi.io/api/v1/sales")
        const data = res.data.map((item: any) => {
          return {
            createdAt: item.createdAt,
            sales: parseFloat(item.price)
          }
        })
        .sort((a: any, b: any) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf())
        .filter((item: any) => {
          let saleDay = new Date(item.createdAt)
          return saleDay > lastMonth;
        })

        let map = data.reduce((prev: any, next: any) =>{
          if (next.createdAt in prev) {
            prev[next.createdAt].price += next.price;
          } else {
             prev[next.createdAt] = next;
          }
          return prev;
        }, {});
        setSales(Object.keys(map).map(createdAt => map[createdAt]))
      } catch (error) {
        console.log("n foi")
      }
    }
    getSales()
  }, [])

  const formatXAxis = (tickItem: any) => {
    let date = new Date(tickItem);
    return date.toLocaleString('default', { day:'numeric', month: 'short' });
  }

  return (
    <Container>
      <TitleContainer>
        <ChartTitle>
          Sales
        </ChartTitle>
        <ExclamationCircle /> 
      </TitleContainer>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={sales}>
          <XAxis dataKey={"createdAt"} tickFormatter={formatXAxis}  />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#F3F4F6" strokeDasharray={"0"} vertical={false} />
          <Line type="monotone" dataKey="sales" stroke="#0E9F6E" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart