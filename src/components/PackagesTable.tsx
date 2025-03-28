
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package } from "@/lib/types";

interface PackagesTableProps {
  packages: Package[];
}

const PackagesTable = ({ packages }: PackagesTableProps) => {
  if (packages.length === 0) {
    return <p>No packages available</p>;
  }

  const handleFlag = (id: string) => {
    console.log("Flagging package:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting package:", id);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Professional</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((pkg) => (
            <TableRow key={pkg.id}>
              <TableCell>{pkg.id}</TableCell>
              <TableCell>{pkg.name}</TableCell>
              <TableCell>{pkg.service}</TableCell>
              <TableCell>{pkg.professional}</TableCell>
              <TableCell>₹ {pkg.price}</TableCell>
              <TableCell>{pkg.description}</TableCell>
              <TableCell>{pkg.duration}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleFlag(pkg.id)}
                  >
                    Flag
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(pkg.id)}
                  >
                    Delete
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

export default PackagesTable;
