/**
 * Get color class for air quality status
 */
export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Good':
      return 'bg-green-500';
    case 'Moderate':
      return 'bg-yellow-500';
    case 'Better not go out':
      return 'bg-orange-500';
    case 'Unhealthy':
      return 'bg-red-500';
    case 'Very Unhealthy':
      return 'bg-purple-500';
    case 'Hazardous':
      return 'bg-rose-900';
    default:
      return 'bg-gray-500';
  }
}; 