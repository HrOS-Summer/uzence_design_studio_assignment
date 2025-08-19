import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from '../components/inputField/InputField';

const meta: Meta = {
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
    errorMessage: "Please use only A-Z, a-z, 0-9 characters.",
  },
};

export default meta;
type Story = StoryObj;

// Fix - explicitly type args as 'any' to resolve TypeScript errors
const withState: Story["render"] = (args: any) => {
  const [value, setValue] = useState(args.value ?? "");
  const [invalid, setInvalid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    // Validation: only alphabets, numbers and space allowed
    const isValid = /^[A-Za-z0-9 ]*$/.test(newValue);
    setInvalid(!isValid && newValue.length > 0);
  };

  return (
    <InputField
      {...args}
      value={value}
      onChange={handleChange}
      invalid={invalid || args.invalid}
      errorMessage={invalid ? 'Please use only A-Z, a-z, 0-9 characters.' : args.errorMessage}
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
  render: (args: any) => <InputField {...args} />,
};
