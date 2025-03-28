
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import ChartSection from "@/components/ChartSection";
import ProfessionalsTable from "@/components/ProfessionalsTable";
import ServicesTable from "@/components/ServicesTable";
import PackagesTable from "@/components/PackagesTable";
import RequestsTable from "@/components/RequestsTable";
import CustomersTable from "@/components/CustomersTable";
import { mockData } from "@/lib/mock-data";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [excludeFilter, setExcludeFilter] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching with filters:", { searchText, serviceFilter, priceFilter, locationFilter, excludeFilter });
  };
  
  const handleReset = () => {
    setSearchText("");
    setServiceFilter("");
    setPriceFilter("");
    setLocationFilter("");
    setExcludeFilter("");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Search" 
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Category</SelectItem>
              {mockData.serviceCategories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Price</SelectItem>
              <SelectItem value="500">0-500</SelectItem>
              <SelectItem value="1000">500-1000</SelectItem>
              <SelectItem value="1500">1000-1500</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Location</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Indore">Indore</SelectItem>
              <SelectItem value="Bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={excludeFilter} onValueChange={setExcludeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Exclude" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Exclude</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="services">Services</SelectItem>
              <SelectItem value="packages">Packages</SelectItem>
              <SelectItem value="requests">Requests</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex gap-2">
            <Button type="submit" className="w-full">Search</Button>
            <Button type="button" variant="outline" className="w-full" onClick={handleReset}>Reset</Button>
          </div>
        </form>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Users" value={mockData.stats.totalUsers} />
          <StatCard title="Platinum Users" value={mockData.stats.platUsers} />
          <StatCard title="Total Professionals" value={mockData.stats.totalProfessionals} />
          <StatCard title="Total Services" value={mockData.stats.totalServices} />
          <StatCard title="Total Requests" value={mockData.stats.totalRequests} />
          <StatCard title="Closed Requests" value={mockData.stats.closedRequests} />
          <StatCard title="Pending Requests" value={mockData.stats.pendingRequests} />
          <StatCard title="Total Revenue" value={`₹${mockData.stats.totalRevenue}`} />
        </div>
        
        <ChartSection />
        
        <Card className="p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">New Professionals</h2>
          <ProfessionalsTable professionals={mockData.professionals} isVerified={false} />
        </Card>
        
        <Card className="p-4 mb-8">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Services</h2>
            <Button size="sm">New +</Button>
          </div>
          <ServicesTable services={mockData.services} />
        </Card>
        
        <Card className="p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Service Packages</h2>
          <PackagesTable packages={mockData.packages} />
        </Card>
        
        <Card className="p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Service Requests</h2>
          <RequestsTable requests={mockData.serviceRequests} />
        </Card>
        
        <Card className="p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Verified Professionals</h2>
          <ProfessionalsTable professionals={mockData.verifiedProfessionals} isVerified={true} />
        </Card>
        
        <Card className="p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4">Customers</h2>
          <CustomersTable customers={mockData.customers} />
        </Card>
      </div>
    </div>
  );
};

export default Index;
