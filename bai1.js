const customers = [
    { name: 'Alice', orders: [120, 250, 320] },
    { name: 'Bob', orders: [50, 100, 40] },
    { name: 'Charlie', orders: [400, 500] },
  ];
  
  // Tính tổng giá trị đơn hàng của từng khách hàng
  const result = customers.map(customer => ({
    name: customer.name,
    totalOrders: customer.orders.reduce((sum, order) => sum + order, 0)
  }));
  
  // Sắp xếp theo tổng đơn hàng giảm dần
  result.sort((a, b) => b.totalOrders - a.totalOrders);
  
  console.log(result);
  