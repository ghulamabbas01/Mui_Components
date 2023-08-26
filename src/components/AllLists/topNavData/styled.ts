import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  a: {
    textDecoration: "none",
    fontSize: 12,
    color: theme.palette.grey[600],
    "& :hover": {
      color: theme.palette.primary.main,
    },
    p: {
      display: "flex",
      gap: theme.spacing(1),
      alignItems: "center",
      transition: ".2s ease-in",
      color: theme.palette.grey[600],
      fontSize: 12,
    },
  },
}));
export default RootStyled;
