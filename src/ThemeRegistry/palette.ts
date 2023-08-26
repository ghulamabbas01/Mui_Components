import { alpha } from "@mui/material/styles";
// ----------------------------------------------------------------------

export function createGradient(color1: string, color2: string) {
  return `linear-gradient(145.42deg, ${color1}, ${color2} 120%)`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY: any = {
  light: "#8481FF",
  main: "#7572FF",
  dark: "#514ED7",
  darker: "#3D3AAF",
  contrastText: "#fff",
};
const SECONDARY: any = {
  light: "#7200CC",
  main: "#FF61AC",
  dark: "#34005C",
  darker: "#3D3AAF",
  contrastText: "#fff",
};
const INFO: any = {
  light: "#33C6E1",
  lighter: "#B3EAF4",
  main: "#00B8D9",
  dark: "#0093AE",
  darker: "#006E82",
  contrastText: "#fff",
};
const SUCCESS: any = {
  light: "#77ED8B",
  lighter: "#D3FCD2",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: GREY[800],
};
const WARNING: any = {
  light: "#FDC85C",
  lighter: "#FEEAC2",
  main: "#FCBA33",
  dark: "#CB9629",
  darker: "#9A721F",
  contrastText: GREY[800],
};
const ERROR: any = {
  light: "#FF7859",
  lighter: "#FFCCC1",
  main: "#FF5630",
  dark: "#CD4526",
  darker: "#9C341D",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.main, SECONDARY.main),
  info: createGradient(INFO.light, INFO.main),
  background: "radial-gradient( #DBEAFF, #F3DFE0,#DBCFF3,#DBEAFF)",
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,

  chart: CHART_COLORS,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[400],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    divider: GREY[400],
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "#F3F4F8" },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    divider: GREY[700],
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: { paper: "#162031", default: "#0F172B" },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
