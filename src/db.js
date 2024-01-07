const services = [
    { id: 1, name: 'Electrician', rate: 50 },
    { id: 2, name: 'Plumber', rate: 40 },
  ];
  
  const teams = [
    { id: 1, name: 'Team A', members: ['John', 'Alice'] },
    { id: 2, name: 'Team B', members: ['Bob', 'Eve'] },
  ];

  const serviceRequests = [
    { id: 1, serviceId: 1, source: 'Walk-in', customer: 'Customer 1', status: 'Pending', rating: 4, createdAt: new Date(), dueDate: new Date('2024-01-15') },
    { id: 2, serviceId: 2, source: 'Web', customer: 'Customer 2', status: 'Completed', rating: 5, createdAt: new Date(), completedAt: new Date(), dueDate: new Date('2024-01-20') },
    { id: 3, serviceId: 1, source: 'Platform', customer: 'Customer 3', status: 'Work in Progress', rating: null, createdAt: new Date(), dueDate: new Date('2024-01-25') },
  ];
  
  const completedServiceRequests = serviceRequests.filter(request => request.status === 'Completed');
  
  const canceledServiceRequests = [
    { id: 4, serviceId: 2, source: 'Web', customer: 'Customer 4', status: 'Canceled', rating: null },
    // Add more canceled service requests as needed
  ];
  
  const repeatServiceRequests = [
    { id: 5, serviceId: 1, source: 'Platform', customer: 'Customer 5', status: 'Completed', rating: 3 },
    { id: 6, serviceId: 2, source: 'Walk-in', customer: 'Customer 6', status: 'Completed', rating: 4 },
    // Add more repeat service requests as needed
  ];

  const financialTransactions = [
    { id: 1, type: 'Subscription', amount: 500, date: new Date('2024-01-01') },
    { id: 2, type: 'Recharge', amount: 1000, date: new Date('2024-01-05') },
    // Add more financial transactions as needed
  ];
  
  const technicianPerformances = [
    { id: 1, technicianId: 1, productivity: 10, qualityRating: 4, revenue: 200 },
    { id: 2, technicianId: 2, productivity: 8, qualityRating: 5, revenue: 150 },
    // Add more technician performances as needed
  ]; 

  
  export {
    services,
    teams,
    serviceRequests,
    canceledServiceRequests,
    repeatServiceRequests,
    completedServiceRequests,
    financialTransactions,
    technicianPerformances,
  };