import React from "react";
import { HeaderColor } from "../components/header/header.component";
type IHeaderColor = {
  headerLineColor: HeaderColor;
  toggleColor: (color: HeaderColor) => void;
};
export const HeaderColorContext = React.createContext<Partial<IHeaderColor>>(
  {}
);
