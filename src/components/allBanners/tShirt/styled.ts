import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .banner-box": {
    padding: theme.spacing(4),
    backgroundColor: "rgba(252, 186, 51, 0.12)",
    borderRadius: 16,
    border: `1px solid ${theme.palette.warning.main}`,
    ".MuiButtonBase-root": {
      padding: "11px 22px",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.warning.main,
    },
  },
}));
export default RootStyled;
