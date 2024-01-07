import React from 'react';
import { services, teams, serviceRequests, canceledServiceRequests, repeatServiceRequests, completedServiceRequests,financialTransactions, technicianPerformances } from './db';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard
        services={services}
        teams={teams}
        serviceRequests={serviceRequests}
        canceledServiceRequests={canceledServiceRequests}
        repeatServiceRequests={repeatServiceRequests}
        completedServiceRequests={completedServiceRequests}
        financialTransactions={financialTransactions}
        technicianPerformances={technicianPerformances}
      />
    </div>
  );
}

export default App;