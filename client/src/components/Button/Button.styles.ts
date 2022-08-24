import styled, { css } from 'styled-components';
import { ButtonProps } from 'components/Button/Button.interface';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  min-width: fit-content;
  justify-content: center;
  font-weight: 600;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  overflow: hidden;
  line-height: 120%;

  ${({ size }) => size === 'large' && css`
    font-size: 1.7rem;
    padding: 20px;
  `}

  ${({ size }) => size === 'medium' && css`
    font-size: 1.5rem;
    padding: 15px;
  `}

  ${({ size }) => size === 'small' && css`
    font-size: 1.2rem;
    padding: 15px;
  `}

  ${({ color }) => color === 'primary' && css`
    background: ${({ theme }) => theme.gradient.primary};
    color: ${({ theme }) => theme.colors.white};

    &:enabled:hover {
      background: ${({ theme }) => theme.gradient.transparent};
    }
  `}

  ${({ color }) => color === 'secondary' && css`
    background-color: sandybrown;
    color: black;

    &:enabled:hover {
      background-color: darkkhaki;
    }
  `}

  ${({ color }) => color === 'success' && css`
    background-color: burlywood;
    color: black;

    &:enabled:hover {
      background-color: blueviolet;
    }
  `}

  ${({ color }) => color === 'error' && css`
    background-color: red;
    color: white;

    &:enabled:hover {
      background-color: fuchsia;
    }
  `}

  ${({ color }) => color === 'info' && css`
    background-color: grey;
    color: floralwhite;

    &:enabled:hover {
      background-color: fuchsia;
    }
  `}

  ${({ color }) => color === 'warning' && css`
    background-color:olive;
    color: white;

    &:enabled:hover {
      background-color: darkorange;
    }
  `}

  ${({ icon, iconUrl }) => (icon === 'left' && css`
    padding-left: 60px;
    background-image: url(${iconUrl});
    background-repeat: no-repeat;
    background-position: 25px 50%;
    background-size: 20px;
  `)
}

  ${({ icon, iconUrl }) => (icon === 'right' && css`
    padding-right: 60px;
    background-image: url(${iconUrl});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 80% 50%;
  `)
}
  ${({ disabled }) => disabled && css`
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
  `}
`;
