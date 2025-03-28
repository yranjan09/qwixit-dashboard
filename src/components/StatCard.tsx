
interface StatCardProps {
  title: string;
  value: string | number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
