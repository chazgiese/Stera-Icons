import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PieIconFilled = memo(
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
          d="M17 14.622a4 4 0 0 0 2.5.878l.282-.01a4 4 0 0 0 .559-.08l-1.045 2.93A2.5 2.5 0 0 1 16.94 20H7.056c-1.057 0-2-.665-2.355-1.66l-1.047-2.93q.409.09.846.09l.23-.007a4 4 0 0 0 2.27-.87 4 4 0 0 0 2.5.877l.23-.007a4 4 0 0 0 2.27-.87 4 4 0 0 0 2.5.877l.23-.007a4 4 0 0 0 2.27-.87"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5c4.697 0 8.51 2.648 9.785 6.283l.055.177c.109.417.095.86-.118 1.232A2.57 2.57 0 0 1 19.5 14c-.77 0-1.456-.347-1.93-.901l-.57-.664-.57.664A2.53 2.53 0 0 1 14.5 14c-.77 0-1.456-.347-1.93-.901l-.57-.664-.57.664A2.53 2.53 0 0 1 9.5 14c-.77 0-1.456-.347-1.93-.901L7 12.435l-.57.664A2.53 2.53 0 0 1 4.5 14c-.944 0-1.77-.525-2.22-1.308-.245-.425-.228-.944-.065-1.409l.127-.338c1.342-3.349 4.87-5.784 9.22-5.937zm-1.294 2.793a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414m4 0a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconFilled.displayName = "PieIconFilled";
export { PieIconFilled };
