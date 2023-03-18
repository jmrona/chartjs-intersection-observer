import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useInView, InView } from "react-intersection-observer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data, id }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = (inView, entry) => {
    !isVisible && setIsVisible(inView);
  };

  return (
    <div>
      <h1>Doughnut</h1>
      <InView as='div' onChange={handleVisibility} style={{ minHeight: "300px" }}>
        {isVisible && <Doughnut data={data} />}
      </InView>
    </div>
  );
}
