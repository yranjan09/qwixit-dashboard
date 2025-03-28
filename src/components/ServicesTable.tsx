
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Service } from "@/lib/types";

interface ServicesTableProps {
  services: Service[];
}

const ServicesTable = ({ services }: ServicesTableProps) => {
  if (services.length === 0) {
    return <p>No services available</p>;
  }

  const handleDelete = (id: string) => {
    console.log("Deleting service:", id);
  };

  const handleUpdate = (id: string) => {
    console.log("Updating service:", id);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.id}</TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell>₹ {service.basePrice}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.category}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(service.id)}
                  >
                    Delete
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => handleUpdate(service.id)}
                  >
                    Update
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesTable;
