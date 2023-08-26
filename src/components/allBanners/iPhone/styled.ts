import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .banner-box": {
    padding: theme.spacing(4),
    backgroundColor: "rgba(208, 207, 254, 0.30)",
    position: "relative",
    ":after": {
      content: '""',
      width: "20px",
      height: "20px",
      backgroundColor: theme.palette.info.main,
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      transform: "rotate(-30deg)",
      position: "absolute",
      left: "50%",
      top: "80%",
    },
    ":before": {
      content: '""',
      width: "20px",
      height: "20px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
      position: "absolute",
      right: "2%",
      top: "5%",
    },
    ".MuiButtonBase-root": {
      padding: "11px 22px",
      marginTop: theme.spacing(2),
    },
  },
}));
export default RootStyled;
