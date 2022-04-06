import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.main};
  border: 2px solid ${({ theme }) => theme.colors.main};
`;

export const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;
