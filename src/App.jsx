import "./App.css";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='App'>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      <div className='card'>
        <PieChart data={data} id={1} />
        <PieChart data={data} id={2} />
        <PieChart data={data} id={3} />
        <PieChart data={data} id={4} />
        <PieChart data={data} id={5} />
        <PieChart data={data} id={6} />
        <PieChart data={data} id={7} />
        <PieChart data={data} id={8} />
        <PieChart data={data} id={9} />
        <PieChart data={data} id={10} />
        <DoughnutChart data={data} id={1} />
        <DoughnutChart data={data} id={2} />
        <DoughnutChart data={data} id={3} />
        <DoughnutChart data={data} id={4} />
        <DoughnutChart data={data} id={5} />
        <DoughnutChart data={data} id={6} />
        <DoughnutChart data={data} id={7} />
        <DoughnutChart data={data} id={8} />
        <DoughnutChart data={data} id={9} />
        <DoughnutChart data={data} id={10} />
      </div>
    </div>
  );
}

export default App;
