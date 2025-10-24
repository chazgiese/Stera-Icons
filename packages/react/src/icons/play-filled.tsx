import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlayIconFilled = memo(
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
          d="M5.57 1.193c.756-.082 1.495.152 2.252.498.762.347 1.694.88 2.856 1.545l6.525 3.728c1.178.673 2.122 1.212 2.816 1.697.689.483 1.272 1.006 1.586 1.706a4 4 0 0 1 0 3.267c-.314.7-.897 1.223-1.586 1.705-.694.486-1.638 1.024-2.816 1.697l-6.525 3.729-1.578.89c-.474.26-.897.481-1.278.655-.757.345-1.496.58-2.253.498a4 4 0 0 1-2.808-1.63c-.447-.616-.61-1.374-.686-2.203C2 18.14 2 17.067 2 15.729V8.272c0-1.339-.001-2.412.075-3.246.076-.83.24-1.587.686-2.203a4 4 0 0 1 2.808-1.63"
        />
        <path
          fill="currentColor"
          d="M5.57 1.192c.756-.082 1.495.153 2.252.498.762.348 1.694.881 2.856 1.545l6.525 3.729c1.178.673 2.122 1.211 2.816 1.697.689.482 1.272 1.005 1.586 1.705a4 4 0 0 1 0 3.268c-.314.7-.897 1.222-1.586 1.705-.694.485-1.638 1.024-2.816 1.697l-6.525 3.728-1.578.891c-.474.26-.897.48-1.278.654-.757.346-1.496.58-2.253.498a4 4 0 0 1-2.808-1.63c-.447-.616-.61-1.374-.686-2.203C2 18.14 2 17.067 2 15.728V8.271c0-1.338-.001-2.412.075-3.246.076-.829.24-1.587.686-2.203a4 4 0 0 1 2.808-1.63"
        />
      </svg>
    ))
);
PlayIconFilled.displayName = "PlayIconFilled";
export { PlayIconFilled };
