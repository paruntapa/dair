"use client";

import React from 'react';
import { ProtectedRoute } from '../../components/ProtectedRoute';

const ValidatorPage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Validator Dashboard</h1>
          <p className="text-gray-300">
            Monitor and validate air quality data for locations around the world.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300">Validator page content will be added here.</p>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ValidatorPage;