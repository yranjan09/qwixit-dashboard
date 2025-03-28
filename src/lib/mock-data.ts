
import { Professional, Service, Package, ServiceRequest, Customer, Stats, ChartData } from "@/lib/types";

const stats: Stats = {
  totalUsers: 1245,
  platUsers: 345,
  totalProfessionals: 432,
  totalServices: 28,
  totalRequests: 856,
  closedRequests: 698,
  pendingRequests: 158,
  totalRevenue: 548920,
};

const professionals: Professional[] = [
  {
    id: "PRO1",
    name: "Amit Kumar",
    email: "amit@example.com",
    contact: "9876543210",
    pincode: "110001",
    service: "Plumbing",
    price: 750,
    location: "Delhi",
  },
  {
    id: "PRO2",
    name: "Priya Singh",
    email: "priya@example.com",
    contact: "8765432109",
    pincode: "400001",
    service: "Electrical",
    price: 850,
    location: "Indore",
  },
];

const verifiedProfessionals: Professional[] = [
  {
    id: "PRO3",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    contact: "7654321098",
    pincode: "560001",
    service: "Carpentry",
    price: 950,
    location: "Bangalore",
  },
  {
    id: "PRO4",
    name: "Neha Patel",
    email: "neha@example.com",
    contact: "6543210987",
    pincode: "380001",
    service: "Cleaning",
    price: 650,
    location: "Delhi",
  },
  {
    id: "PRO5",
    name: "Rajesh Verma",
    email: "rajesh@example.com",
    contact: "5432109876",
    pincode: "452001",
    service: "Painting",
    price: 1200,
    location: "Indore",
  },
];

const services: Service[] = [
  {
    id: "SER1",
    name: "Plumbing Services",
    basePrice: 500,
    description: "All types of plumbing work",
    category: "Home Repair",
  },
  {
    id: "SER2",
    name: "Electrical Repair",
    basePrice: 600,
    description: "Fix electrical issues and installations",
    category: "Home Repair",
  },
  {
    id: "SER3",
    name: "Carpentry Work",
    basePrice: 800,
    description: "Wood work and furniture assembly",
    category: "Home Improvement",
  },
  {
    id: "SER4",
    name: "Home Cleaning",
    basePrice: 450,
    description: "Deep cleaning services for homes",
    category: "Cleaning",
  },
];

const packages: Package[] = [
  {
    id: "PKG1",
    name: "Basic Plumbing",
    service: "Plumbing Services",
    professional: "Amit Kumar",
    price: 750,
    description: "Leak repair and basic plumbing work",
    duration: "2 hours",
  },
  {
    id: "PKG2",
    name: "Premium Electrical",
    service: "Electrical Repair",
    professional: "Priya Singh",
    price: 1200,
    description: "Complete electrical checkup and repair",
    duration: "3 hours",
  },
];

const serviceRequests: ServiceRequest[] = [
  {
    id: "REQ1",
    service: "Plumbing Services",
    package: "Basic Plumbing",
    customer: "Vikram Singh",
    professional: "Amit Kumar",
    requestDate: "2023-06-15",
    completionDate: "2023-06-18",
    price: 750,
    location: "Delhi",
    rating: 4,
    status: "Completed",
  },
  {
    id: "REQ2",
    service: "Electrical Repair",
    package: "Premium Electrical",
    customer: "Ananya Gupta",
    professional: "Priya Singh",
    requestDate: "2023-06-20",
    completionDate: "",
    price: 1200,
    location: "Indore",
    rating: 0,
    status: "Requested",
  },
  {
    id: "REQ3",
    service: "Carpentry Work",
    package: "Custom Furniture",
    customer: "Ravi Patel",
    professional: "Rahul Sharma",
    requestDate: "2023-06-10",
    completionDate: "2023-06-12",
    price: 1500,
    location: "Bangalore",
    rating: 5,
    status: "Closed",
  },
  {
    id: "REQ4",
    service: "Home Cleaning",
    package: "Deep Clean",
    customer: "Suman Joshi",
    professional: "Neha Patel",
    requestDate: "2023-06-22",
    completionDate: "",
    price: 850,
    location: "Delhi",
    rating: 0,
    status: "Accepted",
  },
  {
    id: "REQ5",
    service: "Painting",
    package: "Room Painting",
    customer: "Ajay Kumar",
    professional: "Rajesh Verma",
    requestDate: "2023-06-05",
    completionDate: "2023-06-08",
    price: 3500,
    location: "Indore",
    rating: 2,
    status: "Rejected",
  },
];

const customers: Customer[] = [
  {
    id: "CUS1",
    name: "Vikram Singh",
    email: "vikram@example.com",
    phone: "9988776655",
    location: "Delhi",
    pincode: "110001",
    type: "Platinum",
    isApproved: true,
  },
  {
    id: "CUS2",
    name: "Ananya Gupta",
    email: "ananya@example.com",
    phone: "8877665544",
    location: "Indore",
    pincode: "452001",
    type: "Regular",
    isApproved: true,
  },
  {
    id: "CUS3",
    name: "Ravi Patel",
    email: "ravi@example.com",
    phone: "7766554433",
    location: "Bangalore",
    pincode: "560001",
    type: "Platinum",
    isApproved: true,
  },
  {
    id: "CUS4",
    name: "Suman Joshi",
    email: "suman@example.com",
    phone: "6655443322",
    location: "Delhi",
    pincode: "110016",
    type: "Regular",
    isApproved: false,
  },
];

const charts: ChartData = {
  ratings: [
    { name: "1 Star", value: 15 },
    { name: "2 Stars", value: 20 },
    { name: "3 Stars", value: 30 },
    { name: "4 Stars", value: 45 },
    { name: "5 Stars", value: 90 },
  ],
  packageRatings: [
    { name: "Basic", value: 40 },
    { name: "Standard", value: 85 },
    { name: "Premium", value: 75 },
  ],
  requests: [
    { name: "Requested", value: 45 },
    { name: "Accepted", value: 35 },
    { name: "Completed", value: 120 },
  ],
};

const serviceCategories = [
  "Home Repair",
  "Home Improvement",
  "Cleaning",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Painting",
];

export const mockData = {
  stats,
  professionals,
  verifiedProfessionals,
  services,
  packages,
  serviceRequests,
  customers,
  charts,
  serviceCategories,
};
