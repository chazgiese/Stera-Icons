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
          d="M17 14.622a4 4 0 0 0 2.5.878l.283-.01a4 4 0 0 0 .558-.08l-1.045 2.93A2.5 2.5 0 0 1 16.942 20H7.056c-1.056 0-2-.665-2.354-1.66l-1.047-2.93q.409.09.845.09l.23-.007a4 4 0 0 0 2.27-.87 4 4 0 0 0 2.5.877l.23-.007a4 4 0 0 0 2.27-.87 4 4 0 0 0 2.5.877l.23-.007a4 4 0 0 0 2.27-.87"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 5c4.697 0 8.511 2.648 9.785 6.283l.055.177c.11.417.096.86-.118 1.232A2.57 2.57 0 0 1 19.5 14c-.77 0-1.456-.347-1.93-.901l-.57-.664-.569.664a2.53 2.53 0 0 1-1.93.901c-.77 0-1.457-.347-1.931-.901l-.57-.664-.569.664a2.53 2.53 0 0 1-1.93.901c-.77 0-1.457-.347-1.931-.901L7 12.435l-.569.664a2.53 2.53 0 0 1-1.93.901c-.945 0-1.771-.525-2.221-1.308-.245-.425-.228-.944-.065-1.409l.127-.338c1.342-3.349 4.87-5.784 9.22-5.937zm-1.294 2.793a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414m4 0a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconFilled.displayName = "PieIconFilled";
export { PieIconFilled };
