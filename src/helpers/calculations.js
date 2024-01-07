export const calculateRequestsStats = (serviceRequests) => {
    const totalRequests = serviceRequests.length;
    const pendingRequests = serviceRequests.filter(request => request.status === 'Pending').length;
    const workInProgressRequests = serviceRequests.filter(request => request.status === 'Work in Progress').length;
    const completedRequests = serviceRequests.filter(request => request.status === 'Completed').length;
  
    return { totalRequests, pendingRequests, workInProgressRequests, completedRequests };
  };
  
  export const calculateWorkforceProductivity = (completedServiceRequests) => {
    return completedServiceRequests.length;
  };
  
  export const calculateRevenue = (completedServiceRequests, services) => {
    const totalRevenue = completedServiceRequests.reduce((sum, request) => {
      const service = services.find(service => service.id === request.serviceId);
      return sum + service.rate;
    }, 0);
  
    return totalRevenue;
  };

export const calculateQualityKPIs = (serviceRequests, canceledServiceRequests, repeatServiceRequests) => {
    const totalRatings = serviceRequests.reduce((sum, request) => (request.rating ? sum + 1 : sum), 0);
    const averageRating = totalRatings > 0
      ? serviceRequests.reduce((sum, request) => sum + request.rating, 0) / totalRatings
      : 0;
  
    const totalCanceledRequests = canceledServiceRequests.length;
    const totalRepeatRequests = repeatServiceRequests.length;
  
    return { totalRatings, averageRating, totalCanceledRequests, totalRepeatRequests };
  };

  export const calculateSpeedOfServiceKPIs = (serviceRequests) => {
    const completedRequests = serviceRequests.filter(request => request.status === 'Completed');
    const averageTurnaroundTime = completedRequests.length > 0
      ? completedRequests.reduce((sum, request) => sum + (request.completedAt - request.createdAt), 0) / completedRequests.length
      : 0;
  
    return { averageTurnaroundTime };
  };

  export const identifyUpcomingMaintenanceRequests = (serviceRequests, daysAhead = 7) => {
    const currentDate = new Date();
    const upcomingRequests = serviceRequests.filter(request =>
      request.dueDate &&
      request.dueDate > currentDate &&
      request.dueDate <= new Date(currentDate.getTime() + daysAhead * 24 * 60 * 60 * 1000)
    );
  
    return upcomingRequests;
  };

  export const calculatePlatformEarnings = (financialTransactions) => {
    const platformEarnings = financialTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
    return platformEarnings;
  };
  
  export const calculateTotalTechnicianEarnings = (technicianPerformances) => {
    const totalTechnicianEarnings = technicianPerformances.reduce((sum, performance) => sum + performance.revenue, 0);
    return totalTechnicianEarnings;
  };
  
  export const calculateTotalPayouts = (technicianPerformances) => {
    const totalPayouts = technicianPerformances.reduce((sum, performance) => {
      const salary = performance.productivity * 10 + performance.qualityRating * 5 + performance.revenue * 0.1;
      return sum + salary;
    }, 0);
  
    return totalPayouts;
  };