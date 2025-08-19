import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../components/inputField/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    value: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    variant: {
      control: { type: 'radio' },
      options: ['outlined', 'filled', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    type: { control: { type: 'text' } },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    showClear: { control: 'boolean' },
  },
  args: {
    label: "Filter by Name or Sector",
    placeholder: "Enter name or sector",
    variant: "outlined",
    helperText: "Type to filter companies and sectors",
    size: "md",
    value: "",
    invalid: false,
    showClear: true,
    disabled: false,
    type: "text",
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

// Custom render: stateful and always passes args
const withState: Story["render"] = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  // Always merge value and onChange with (controllable) args!
  return (
    <InputField
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export const Outlined: Story = { render: withState };

export const Filled: Story = {
  args: { variant: 'filled' },
  render: withState,
};

export const Ghost: Story = {
  args: { variant: 'ghost' },
  render: withState,
};

export const Error: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please use only A-Z, a-z, 0-9 characters.',
  },
  render: withState,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
    label: 'Disabled',
    placeholder: 'Not editable',
  },
  render: (args) => <InputField {...args} />
};
