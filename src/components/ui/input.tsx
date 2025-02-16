import * as React from "react";
import { cn } from "@/lib/utils/utils";
import { Label } from "./label";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  register?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, label, leftIcon, register, rightIcon, error, ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </span>
          )}
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:bg-transparent md:text-sm",
              leftIcon ? "pl-10" : "",
              rightIcon ? "pr-10" : "",
              error ? "border-red-500" : "",
              className
            )}
            ref={ref}
            {...(register && props.name ? register(props.name) : {})}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
