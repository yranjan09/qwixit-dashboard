
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ServiceRequest } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RequestsTableProps {
  requests: ServiceRequest[];
}

const RequestsTable = ({ requests }: RequestsTableProps) => {
  if (requests.length === 0) {
    return <p>No requests yet</p>;
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'requested':
        return 'bg-yellow-200';
      case 'accepted':
        return 'bg-orange-200';
      case 'completed':
        return 'bg-green-200';
      case 'closed':
        return 'bg-green-300';
      case 'rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Package</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Professional</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>Completion</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.id}</TableCell>
              <TableCell>{request.service}</TableCell>
              <TableCell>{request.package}</TableCell>
              <TableCell>{request.customer}</TableCell>
              <TableCell>{request.professional}</TableCell>
              <TableCell>{request.requestDate}</TableCell>
              <TableCell>{request.completionDate}</TableCell>
              <TableCell>₹ {request.price}</TableCell>
              <TableCell>{request.location}</TableCell>
              <TableCell>{request.rating}</TableCell>
              <TableCell>
                <Badge className={cn("font-semibold", getStatusColor(request.status))}>
                  {request.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RequestsTable;
