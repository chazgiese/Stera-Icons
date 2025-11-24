import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CameraOffIconFilled = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M1.793 1.793a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414M8.203 11.738a4 4 0 0 0 5.058 5.058L17.465 21H6c-.683 0-1.257.001-1.723-.037-.479-.04-.934-.125-1.366-.345a3.5 3.5 0 0 1-1.529-1.529c-.22-.432-.306-.887-.345-1.365C1 17.257 1 16.684 1 16v-5.499c0-.853-.012-1.518.172-2.084a3.5 3.5 0 0 1 1.696-2.014zM13.697 3c.398.004.76.025 1.105.13.377.115.729.303 1.033.553.371.305.635.718.947 1.187l.22.328c.253.38.308.456.361.51.14.139.319.234.512.273.074.014.166.02.624.02.854 0 1.518-.013 2.084.171a3.5 3.5 0 0 1 2.245 2.245c.184.566.172 1.23.172 2.084v5.5c0 .682.001 1.256-.037 1.723-.039.477-.125.93-.344 1.36l-6.66-6.661a4 4 0 0 0-3.383-3.382l-4.87-4.87c.14-.183.288-.347.46-.488.304-.25.655-.438 1.032-.553.345-.105.708-.126 1.105-.13z"
        />
      </svg>
    ))
);
CameraOffIconFilled.displayName = "CameraOffIconFilled";
export { CameraOffIconFilled };
