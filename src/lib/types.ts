
export interface Professional {
  id: string;
  name: string;
  email: string;
  contact: string;
  pincode: string;
  service: string;
  price: number;
  location: string;
}

export interface Service {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  category: string;
}

export interface Package {
  id: string;
  name: string;
  service: string;
  professional: string;
  price: number;
  description: string;
  duration: string;
}

export interface ServiceRequest {
  id: string;
  service: string;
  package: string;
  customer: string;
  professional: string;
  requestDate: string;
  completionDate: string;
  price: number;
  location: string;
  rating: number;
  status: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  pincode: string;
  type: string;
  isApproved: boolean;
}

export interface Stats {
  totalUsers: number;
  platUsers: number;
  totalProfessionals: number;
  totalServices: number;
  totalRequests: number;
  closedRequests: number;
  pendingRequests: number;
  totalRevenue: number;
}

export interface ChartData {
  ratings: { name: string; value: number }[];
  packageRatings: { name: string; value: number }[];
  requests: { name: string; value: number }[];
}
