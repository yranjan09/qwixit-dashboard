
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Customer } from "@/lib/types";

interface CustomersTableProps {
  customers: Customer[];
}

const CustomersTable = ({ customers }: CustomersTableProps) => {
  if (customers.length === 0) {
    return <p>No customers yet</p>;
  }

  const handleBlock = (id: string) => {
    console.log("Blocking customer:", id);
  };

  const handleUnblock = (id: string) => {
    console.log("Unblocking customer:", id);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Pincode</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>
                <a href="#" className="font-medium hover:underline">
                  {customer.name} ➚
                </a>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.location}</TableCell>
              <TableCell>{customer.pincode}</TableCell>
              <TableCell>{customer.type}</TableCell>
              <TableCell>
                {customer.isApproved ? (
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleBlock(customer.id)}
                  >
                    Block
                  </Button>
                ) : (
                  <Button 
                    size="sm"
                    onClick={() => handleUnblock(customer.id)}
                  >
                    Unblock
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;
