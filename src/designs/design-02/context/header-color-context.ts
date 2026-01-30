import React from "react";
export enum HeaderColor {
  CUSTOM_BLUE,
  ORANGE,
}


type IHeaderColor = {
  headerLineColor: HeaderColor;
  toggleColor: (color: HeaderColor) => void;
};
export const HeaderColorContext = React.createContext<Partial<IHeaderColor>>(
  {}
);
