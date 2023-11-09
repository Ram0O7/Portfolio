import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="info" />
      </Box>
    </div>
  );
}
