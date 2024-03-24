import { LineChart as L, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const data = [
        { id: 1, name: "Alice", math: 65, physics: 70, chemistry: 75 },
        { id: 2, name: "Bob", math: 70, physics: 75, chemistry: 80 },
        { id: 3, name: "Charlie", math: 68, physics: 72, chemistry: 78 },
        { id: 4, name: "David", math: 72, physics: 77, chemistry: 82 },
        { id: 5, name: "Emma", math: 75, physics: 80, chemistry: 85 },
        { id: 6, name: "Frank", math: 78, physics: 82, chemistry: 88 },
        { id: 7, name: "Grace", math: 80, physics: 85, chemistry: 90 },
        { id: 8, name: "Henry", math: 82, physics: 88, chemistry: 92 },
        { id: 9, name: "Ivy", math: 85, physics: 90, chemistry: 95 },
        { id: 10, name: "Jack", math: 88, physics: 95, chemistry: 98 }
      ];  

    return (
        <div>
            <L width={800} height={400} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
            </L>
        </div>
    );
};

export default LineChart;
