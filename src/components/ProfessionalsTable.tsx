
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Professional } from "@/lib/types";

interface ProfessionalsTableProps {
  professionals: Professional[];
  isVerified: boolean;
}

const ProfessionalsTable = ({ professionals, isVerified }: ProfessionalsTableProps) => {
  if (professionals.length === 0) {
    return <p>No {isVerified ? "approved" : "new"} professionals</p>;
  }

  const handleApprove = (id: string) => {
    console.log("Approving professional:", id);
  };

  const handleReject = (id: string) => {
    console.log("Rejecting professional:", id);
  };

  const handleBlock = (id: string) => {
    console.log("Blocking professional:", id);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {!isVerified && <TableHead>ID</TableHead>}
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Pincode</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Doc</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {professionals.map((pro) => (
            <TableRow key={pro.id}>
              {!isVerified && <TableCell>{pro.id}</TableCell>}
              <TableCell>
                {isVerified ? (
                  <a href="#" className="font-medium hover:underline">
                    {pro.name} ➚
                  </a>
                ) : (
                  pro.name
                )}
              </TableCell>
              <TableCell>{pro.email}</TableCell>
              <TableCell>{pro.contact}</TableCell>
              <TableCell>{pro.pincode}</TableCell>
              <TableCell>{pro.service}</TableCell>
              <TableCell>₹ {pro.price}</TableCell>
              <TableCell>
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  View
                </a>
              </TableCell>
              <TableCell>{pro.location}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {isVerified ? (
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleBlock(pro.id)}
                    >
                      Block
                    </Button>
                  ) : (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => handleApprove(pro.id)}
                      >
                        Accept
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleReject(pro.id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfessionalsTable;
