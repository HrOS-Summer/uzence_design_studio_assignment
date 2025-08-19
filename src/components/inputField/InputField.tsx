import React from "react";
import type { InputFieldProps } from "../../types/types";
import clsx from "clsx";

const variants = {
  filled: "bg-gray-100 border-gray-200 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-400 dark:text-gray-100",
  outlined: "bg-white border-gray-400 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:focus:border-blue-400 dark:text-gray-100",
  ghost: "bg-transparent border-transparent focus:border-blue-500 dark:border-transparent dark:focus:border-blue-400 dark:text-gray-100",
};

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  showClear = false,
}) => {
  return (
    <div className={clsx("flex flex-col space-y-1", disabled && "opacity-50")}>
      {label && (
        <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium">{label}</label>
      )}
      <div className="relative flex items-center">
        <input
          aria-label={label}
          className={clsx(
            "w-full border rounded transition-colors outline-none",
            variants[variant],
            sizes[size],
            invalid ? "border-red-500 dark:border-red-400" : "",
            disabled && "bg-gray-200 pointer-events-none dark:bg-gray-800"
          )}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {showClear && value && (
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-black dark:hover:text-white focus:outline-none"
            onClick={() => onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
            tabIndex={-1}
            aria-label="Clear input"
          >
            &#10006;
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className="text-xs text-gray-500 dark:text-gray-400">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500 dark:text-red-400">{errorMessage}</span>
      )}
    </div>
  );
};
