import { Box } from "@mui/material";
import Bar from "./Bar";
import Header from "../../components/Header"

const BarChart = () => {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
