import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botão',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicado!' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Padrao: Story = {
  args: {
    children: 'Clique aqui',
    disabled: false
  }
};

export const Primario: Story = {
  args: {
    children: 'Botão primário',
    color: 'primary',
    disabled: false
  }
};
export const Secundario: Story = {
  args: {
    children: 'Botão secundário',
    color: 'secondary',
    disabled: false
  }
};
export const Contido: Story = {
  args: {
    children: 'Botão contido',
    variant: 'contained',
    color: 'primary',
    disabled: false
  }
};
export const ContidoSecundario: Story = {
  args: {
    children: 'Botão contido secundário',
    variant: 'contained',
    color: 'secondary', 
    disabled: false
  }
};

export const Desabilitado: Story = {
  args: {
    children: 'Botão desativado',
    disabled: true
  }
};