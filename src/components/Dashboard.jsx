import React, { useState, useEffect } from 'react';
import { AppBar, IconButton, Drawer, Button, Typography, Box, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PaymentsIcon from '@mui/icons-material/Payments';



const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);


  const mockTransactions = [
    { dt: { cost: 10, name: 'Alice', date: '2023-01-01' } },
    { dt: { cost: 20, name: 'Bob', date: '2023-01-05' } },
    { dt: { cost: 15, name: 'Charlie', date: '2023-01-10' } },
    { dt: { cost: 5, name: 'Diana', date: '2023-01-15' } },
    { dt: { cost: 12, name: 'Eve', date: '2023-01-18' } },
    { dt: { cost: 8, name: 'Frank', date: '2023-01-22' } },
    { dt: { cost: 25, name: 'Grace', date: '2023-01-28' } },
    { dt: { cost: 30, name: 'Hannah', date: '2023-02-01' } },
    { dt: { cost: 7, name: 'Isaac', date: '2023-02-05' } },
    { dt: { cost: 22, name: 'Jack', date: '2023-02-10' } },
    { dt: { cost: 10, name: 'Alice', date: '2023-01-01' } },
    { dt: { cost: 20, name: 'Bob', date: '2023-01-05' } },
    { dt: { cost: 15, name: 'Charlie', date: '2023-01-10' } },
    { dt: { cost: 5, name: 'Diana', date: '2023-01-15' } },
    { dt: { cost: 12, name: 'Eve', date: '2023-01-18' } },
    { dt: { cost: 8, name: 'Frank', date: '2023-01-22' } },
    { dt: { cost: 25, name: 'Grace', date: '2023-01-28' } },
    { dt: { cost: 30, name: 'Hannah', date: '2023-02-01' } },
    { dt: { cost: 7, name: 'Isaac', date: '2023-02-05' } },
    { dt: { cost: 22, name: 'Jack', date: '2023-02-10' } }
  ];

  
  useEffect(() => {
    const total = calculateTotalCost(mockTransactions);
    setTotalSales(total);

    const totalTrans = calculateTotalTransactions(mockTransactions);
    setTotalTransactions(totalTrans);

    const sortedTransactions = mockTransactions.sort((a, b) => new Date(a.dt.date) - new Date(b.dt.date));
    const lastTenTransactions = sortedTransactions.slice(-10);
    setRecentTransactions(lastTenTransactions);
  }, []);

  function calculateTotalCost(transactions) {
    let totalCost = 0;
    transactions.forEach(transaction => {
      totalCost += transaction.dt.cost;
    });
  
    return totalCost;
  }

  function calculateTotalTransactions(transactions) {
    return transactions.length;
  }


  return (
    <div>
      <AppBar style={{backgroundColor:'darkgreen'}} position="static">
        <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ style: { width: '200px' } }}>
        <Button onClick={() => setDrawerOpen(false)}>Close</Button>
        <button>Dashboard</button>
        <button>Placeholder</button>
        <button>Placeholder</button>
      </Drawer>

      <div style={{ padding: '20px' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h4">Dashboard</Typography>

        <Box display="flex" justifyContent="space-between" mt={4}>

          <Paper elevation={3} style={{ width: '30%', padding: '20px', borderRadius: '15px', backgroundColor: 'lightgrey' }}>
            <Typography variant="h6"><AttachMoneyIcon /></Typography>
            <Typography variant="h6">Total Sales:</Typography>
            <Typography variant="h5">${totalSales}</Typography>
          </Paper>

          <Paper elevation={3} style={{ width: '30%', padding: '20px', borderRadius: '15px', backgroundColor: 'lightgrey' }}>
            <Typography variant="h6"><PointOfSaleIcon /></Typography>
            <Typography variant="h6">Total Transactions:</Typography>
            <Typography variant="h5">{totalTransactions}</Typography>
          </Paper>

          <Paper elevation={3} className="box-paper" style={{ width: '30%', padding: '20px', borderRadius: '15px', backgroundColor: 'lightgrey' }}>
            <Typography variant="h6"><PaymentsIcon /></Typography>
            <Typography variant="h6">Recent Transactions:</Typography>
            <div className="scrollable-box">
              <ul>
                {recentTransactions.map((transaction, index) => (
                  <li style={{padding:'10px'}} key={index}>
                    {`Name: ${transaction.dt.name}, Cost: ${transaction.dt.cost}, Date: ${transaction.dt.date}`}
                  </li>
                ))}
              </ul>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;


