import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingFilled = memo(
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
          d="M22.985 4.015c0 2.555-.326 4.418-.897 5.877-.577 1.474-1.38 2.47-2.224 3.315a5 5 0 0 1-6.033.797 7 7 0 0 0-.831 3.31V21a1 1 0 1 1-2 0v-1.343c0-.795-.316-1.56-.879-2.122L8.275 15.69a4 4 0 0 1-4.86-.619C2.002 13.661 1 11.01 1 8V7h1c3.01 0 5.66 1.003 7.071 2.414a4 4 0 0 1 .618 4.861l1.454 1.454a9 9 0 0 1 1.164-3.085 5 5 0 0 1 .486-6.508c.844-.845 1.841-1.647 3.315-2.224 1.459-.57 3.322-.897 5.877-.897h1z"
        />
      </svg>
    ))
);
SeedlingFilled.displayName = "SeedlingFilled";
export { SeedlingFilled };
