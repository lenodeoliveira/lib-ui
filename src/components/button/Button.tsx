import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getButtonUtilityClass, ButtonClasses } from './buttonClasses';
import { useTheme } from '../../theme/ThemeProvider';
import { SxProps } from '../../types/SxProps';
import { applySx } from '../../utils/applySx/applySx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: SxProps;
  variant?: 'outlined' | 'contained';
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  classes?: Partial<ButtonClasses>;
  disabled?: boolean;
  children?: React.ReactNode;
}

interface OwnerState extends ButtonProps { }

const ButtonRoot = styled.button.attrs<{ ownerState: OwnerState }>(
  ({ ownerState }) => ({
    className: clsx(
      getButtonUtilityClass('root'),
      ownerState.variant && getButtonUtilityClass(ownerState.variant),
      ownerState.disabled && getButtonUtilityClass('disabled'),
      ownerState.size && getButtonUtilityClass(ownerState.size)
    ),
  })
)`
  ${({ theme }) => `
    padding: ${theme.spacing(1)};
    border-radius: ${theme.radius.medium};
    font-family: ${theme.font.family};
    font-weight: 600;
    font-size: ${theme.font.size.medium};
    border: 1px solid transparent;
    cursor: pointer;
  `}

  &.base-Button-contained {
    background-color: ${({ theme }) => theme.palletete.primary};
    color: #fff;
  }

  &.base-Button-contained:hover {
    background-color: red
  }

  &.base-Button-outlined {
    background-color: transparent;
    color: ${({ theme }) => theme.palletete.primary};
    border-color: ${({ theme }) => theme.palletete.primary};
  }
  
  &.base-Button-small {
    padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
    font-size: ${({ theme }) => theme.font.size.small};
  }
  
  &.base-Button-large {
    padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(2)}`};
    font-size: ${({ theme }) => theme.font.size.large};
  }
  &.base-Button-disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({ ownerState, theme }) => {
    const sxStyles = applySx(ownerState.sx, theme);
    return Object.entries(sxStyles).map(([key, val]) => `${key}: ${val};`).join('\n');
  }}
`;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { disabled, variant = 'contained', classes = {} } = ownerState;

  const slots = {
    root: ['root', variant, disabled && 'disabled'],
  };

  return Object.fromEntries(
    Object.entries(slots).map(([key, value]) => [
      key,
      clsx(
        value
          .filter((slot): slot is string => typeof slot === 'string')
          .map((slot) => classes[slot as keyof ButtonClasses] || getButtonUtilityClass(slot))
      ),
    ])
  );
};


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {

  const theme = useTheme();
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ButtonRoot
      ref={ref}
      theme={theme}
      ownerState={ownerState}
      className={clsx(classes.root, props.className)}
      {...props}
    >
      {props.children}
    </ButtonRoot>
  );
});

/**
 * slot root: estado base, caso o estilo mude a arquitetura principal
 * como contained que muda o background e a cor do texto, ele é um root.
 * Caso seja um label, devemos adicionar dentro do slot um label slot { label: ['label']}
 * 
 */