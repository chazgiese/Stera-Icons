import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandLeftIconFilled = memo(
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
          d="M9.523 1c.978 0 1.816.782 1.816 1.8v7.05c0 .276.24.5.538.5.297 0 .538-.224.538-.5v-5.9l.01-.188A1.81 1.81 0 0 1 14.23 2.15c.978 0 1.815.782 1.815 1.8v9.2c0 .227.166.426.402.484a.56.56 0 0 0 .607-.24l1.94-3.211.002-.005c.289-.488.77-.786 1.28-.867.392-.063.808 0 1.184.212a1.79 1.79 0 0 1 .757 2.307l-.087.167-.033.066-1.439 3.583-.027.097C19.927 19.88 16.258 23 11.877 23 7 23 3 19.129 3 14.3V6.25c0-1.018.838-1.8 1.815-1.8.916 0 1.71.687 1.806 1.612l.01.188v4.175c0 .276.24.5.538.5.297 0 .538-.224.538-.5V2.8c0-1.018.84-1.8 1.816-1.8"
        />
      </svg>
    ))
);
HandLeftIconFilled.displayName = "HandLeftIconFilled";
export { HandLeftIconFilled };
