import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {

const subjectsMarksData = [
    {"id": 1, "name": "John", "math": 78, "physics": 82, "chemistry": 85},
  {"id": 2, "name": "Emma", "math": 85, "physics": 88, "chemistry": 89},
  {"id": 3, "name": "Liam", "math": 92, "physics": 90, "chemistry": 94},
  {"id": 4, "name": "Olivia", "math": 74, "physics": 78, "chemistry": 80},
  {"id": 5, "name": "Noah", "math": 88, "physics": 84, "chemistry": 87},
  {"id": 6, "name": "Ava", "math": 91, "physics": 92, "chemistry": 90},
  {"id": 7, "name": "Lucas", "math": 76, "physics": 79, "chemistry": 81},
  {"id": 8, "name": "Mia", "math": 83, "physics": 85, "chemistry": 87},
  {"id": 9, "name": "Ethan", "math": 89, "physics": 88, "chemistry": 90},
  {"id": 10, "name": "Sophia", "math": 95, "physics": 94, "chemistry": 96}
  ]
  
  

    return (
        <div>
           <LChart width={800} height={400} data={subjectsMarksData}>
          <XAxis dataKey='name'/>
          <YAxis></YAxis>
           <Line dataKey='math' stroke='red' ></Line>
           <Line dataKey='physics' stroke='green' ></Line>
           <Line dataKey='chemistry' stroke='blue' ></Line>
            </LChart> 
            
        </div>
    );
};

export default LineChart;
