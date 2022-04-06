import styled from "styled-components";
import { colorFromProps } from "../helpers/get-color-from-props";

interface ButtonProps {
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 5px;
  border: 3px solid ${(props) => colorFromProps(props)};
  background-color: #ebebeb;
  color: ${(props) => props.theme.colors.text};
`;
