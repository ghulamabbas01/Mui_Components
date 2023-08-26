import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .Nav-Link": {
    a: {
      textDecoration: "none",
      fontWeight: 600,
      color: theme.palette.common.black,
      "& :hover": {
        color: theme.palette.primary.main,
      },
    },
  },
}));
export default RootStyled;
