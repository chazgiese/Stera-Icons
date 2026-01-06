import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock7IconBoldDuotone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6l-.001.008a1 1 0 0 1-.022.2l-.013.053-.014.048-.01.027-.025.066-.013.027-.033.063q-.002.004-.003.008l-2 3.464a1 1 0 0 1-1.733-1L11 11.73V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock7IconBoldDuotone.displayName = "Clock7IconBoldDuotone";
export { Clock7IconBoldDuotone };
