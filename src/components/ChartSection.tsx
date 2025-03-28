
import { Card } from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { mockData } from "@/lib/mock-data";

const COLORS = ['#f3f59c', '#ef8e75', '#aacb73', '#f7e98d', '#8bae6c'];

const ChartSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData.charts.ratings}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {mockData.charts.ratings.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4">Package Ratings</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockData.charts.packageRatings}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {mockData.charts.packageRatings.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4">Requests</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={mockData.charts.requests}
              margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
              <Bar dataKey="value" fill="#aacb73" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ChartSection;
