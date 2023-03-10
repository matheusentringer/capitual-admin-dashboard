import { IconButton, Tooltip as MuiTooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid,
} from 'recharts';
import styled from 'styled-components';
import { ReactComponent as ExclamationCircle } from '../assets/svg/exclamation-circle.svg';
import CustomTooltip from './CustomTooltip';

const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h2`
  padding-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px 20px 20px;
  width: 100%;
`;

interface Sales {
  createdAt: string;
  productName: string;
  price: string;
  id: number;
}

interface ChartPoint {
  createdAt: string,
  totalSales: number
}

function Chart() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [sales, setSales] = useState<ChartPoint[]>([]);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const getSales = async () => {
      const today = new Date('2022-09-23');
      const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
      const res = await axios.get('https://633740935327df4c43d22bb2.mockapi.io/api/v1/sales');
      const data = res.data
        .sort(
          (a: Sales, b: Sales) => new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf(),
        )
        .filter((item: Sales) => {
          const saleDay = new Date(item.createdAt);
          return saleDay > lastMonth;
        })
        .map((item: Sales) => ({
          createdAt: item.createdAt.slice(0, 10),
          totalSales: parseFloat(item.price),
        }));

      const groupedSales = data.reduce(
        (map: Map<string, number>, next: ChartPoint) => map
          .set(next.createdAt, (map.get(next.createdAt) || 0) + next.totalSales),
        new Map<string, number>(),
      );

      const salesArray = Array
        .from(groupedSales, ([createdAt, totalSales]) => ({ createdAt, totalSales }));

      setSales(salesArray);
    };
    getSales();
  }, []);

  const formatXAxis = (tickItem: Date) => {
    const date = new Date(tickItem);
    return date.toLocaleString('en-US', { timeZone: 'UTC', day: 'numeric', month: 'short' });
  };
  return (
    <Container>
      <TitleContainer>
        <ChartTitle>
          Sales
        </ChartTitle>
        <MuiTooltip title="Sales from last month">
          <IconButton>
            <ExclamationCircle />
          </IconButton>
        </MuiTooltip>
      </TitleContainer>
      <ResponsiveContainer width="100%" aspect={windowDimensions.width < 600 ? 1 : 4 / 1}>
        <LineChart data={sales}>
          <XAxis
            dataKey="createdAt"
            tickFormatter={formatXAxis}
            axisLine={false}
            tickLine={false}
            angle={windowDimensions.width < 600 ? -35 : 0}
            tick={windowDimensions.width < 600 ? { dy: 5 } : { dy: 0 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            hide={windowDimensions.width < 600}
            tick={{ dx: -10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid stroke="#F3F4F6" vertical={false} />
          <Line type="monotone" dataKey="totalSales" stroke="#0E9F6E" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
