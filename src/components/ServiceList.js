import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <ul>
      {services.map(service => (
        <li key={service.id}>
          {service.name} - ${service.rate}/hour
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;