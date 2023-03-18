import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useInView, InView } from "react-intersection-observer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data, id }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px 0px", trackVisibility: true, delay: 100 });

  return (
    <div ref={ref} className={`card`}>
      <h1>Pie chart</h1>
      {inView && <Pie data={data} />}
    </div>
  );
}
