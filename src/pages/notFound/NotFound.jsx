import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        OOPS!, This page not found
        <br />
        <br />
        <Link to='/'>Go To Dashboard</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;