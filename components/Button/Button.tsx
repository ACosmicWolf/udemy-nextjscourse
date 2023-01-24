import { MouseEvent } from "react";

import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { AppTheme } from "@/styles/theme";

import { boxShadow, transition } from "@/components/styles";

export type Color = "primary" | "secondary" | "danger" | "warning";

export type Props = {
  children: String;
  color?: Color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColor = (theme: AppTheme, color?: Color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case "secondary":
      return css`
        color: ${theme.font.regular};
      `;
    case "danger":
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case "warning":
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;

  ${({ color, theme }) => getColor(theme, color)}

  ${transition()}

  ${({ theme }) =>
    boxShadow(theme.components.shadow2, theme.components.shadow1)}

  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow2, theme.components.shadow1, true)}
  }
`;

Button.defaultProps = {
  color: "primary",
};
