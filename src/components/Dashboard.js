import React from 'react';
import ServiceList from './ServiceList';
import { calculateRequestsStats, calculateWorkforceProductivity, calculateRevenue} from '../helpers/calculations';
import { calculateQualityKPIs } from '../helpers/calculations';
import { calculateSpeedOfServiceKPIs } from '../helpers/calculations';
import { identifyUpcomingMaintenanceRequests } from '../helpers/calculations';
import { calculatePlatformEarnings, calculateTotalTechnicianEarnings, calculateTotalPayouts } from '../helpers/calculations';

const Dashboard = ({ services, teams, serviceRequests, financialTransactions, technicianPerformances, completedServiceRequests,repeatServiceRequests, canceledServiceRequests }) => {
  const requestsStats = calculateRequestsStats(serviceRequests);
  const workforceProductivity = calculateWorkforceProductivity(completedServiceRequests);
  const totalRevenue = calculateRevenue(completedServiceRequests, services);
  const qualityKPIs = calculateQualityKPIs(serviceRequests, canceledServiceRequests, repeatServiceRequests);
  const upcomingMaintenanceRequests = identifyUpcomingMaintenanceRequests(serviceRequests);
  const platformEarnings = calculatePlatformEarnings(financialTransactions);
  const totalTechnicianEarnings = calculateTotalTechnicianEarnings(technicianPerformances);
  const totalPayouts = calculateTotalPayouts(technicianPerformances);
  const speedOfServiceKPIs = calculateSpeedOfServiceKPIs(serviceRequests);

  return (
    <div>
      <h1>Service Dashboard</h1>

      <div>
        <h2>Services</h2>
        <ServiceList services={services} />
      </div>

      <div>
        <h2>Teams</h2>
        <ul>
          {teams.map(team => (
            <li key={team.id}>
              {team.name} - Members: {team.members.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Service Requests</h2>
        <ul>
          {serviceRequests.map(request => (
            <li key={request.id}>
              {request.source} - {services.find(service => service.id === request.serviceId).name} - {request.customer} - {request.status}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Operation KPIs</h2>
        <p>Total Requests: {requestsStats.totalRequests}</p>
        <p>Pending Requests: {requestsStats.pendingRequests}</p>
        <p>Work in Progress Requests: {requestsStats.workInProgressRequests}</p>
        <p>Completed Requests: {requestsStats.completedRequests}</p>

        <p>Workforce Productivity: {workforceProductivity} requests completed</p>
        <p>Revenue from Services: ${totalRevenue}</p>

        <h2>Quality KPIs</h2>
        <p>Total Ratings: {qualityKPIs.totalRatings}</p>
        <p>Average Rating: {qualityKPIs.averageRating.toFixed(2)}</p>
        <p>Total Canceled Requests: {qualityKPIs.totalCanceledRequests}</p>
        <p>Total Repeat Requests: {qualityKPIs.totalRepeatRequests}</p>

        <h2>Speed of Service KPIs</h2>
        <p>Average Turnaround Time: {speedOfServiceKPIs.averageTurnaroundTime.toFixed(2)} milliseconds</p>

        <h2>Business Opportunities</h2>
        <p>Upcoming Routine Preventive Maintenance Requests (next 7 days):</p>
        <ul>
          {upcomingMaintenanceRequests.map(request => (
            <li key={request.id}>
              {request.source} - {services.find(service => service.id === request.serviceId).name} - {request.customer} - Due Date: {request.dueDate.toDateString()}
            </li>
          ))}
        </ul>

        <h2>Financial KPIs</h2>
        <p>Platform Earnings: ${platformEarnings}</p>
        <p>Total Technician Earnings: ${totalTechnicianEarnings}</p>
        <p>Total Payouts: ${totalPayouts}</p>
      </div>
    </div>
  );
};

export default Dashboard;