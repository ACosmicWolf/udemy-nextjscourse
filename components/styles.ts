import { css } from "@emotion/react";

export const boxShadow = (
  shadowColor1: string,
  shadowColor2: string,
  inset: boolean = false
) => {
  const insetString = inset ? "inset" : "";
  return css`
    box-shadow: ${insetString} 0.5vmin 0.5vmin 1vmin ${shadowColor1},
      ${insetString} -0.5vmin -0.5vmin 1vmin ${shadowColor2};
  `;
};

export const transition = () => {
  return css`
    transition: all 0.4s ease;
  `;
};
