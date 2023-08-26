import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .banner-box": {
    padding: theme.spacing(3.7),
    backgroundColor: "rgba(117, 114, 255, 0.12)",
    borderRadius: 16,
    border: `1px solid ${theme.palette.primary.main}`,
    ".MuiButtonBase-root": {
      padding: "11px 22px",
    },
  },
}));
export default RootStyled;
