import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CodeIconFilled = memo(
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
          d="M13.068 3.552a1.5 1.5 0 0 1 2.864.895l-5 16a1.5 1.5 0 0 1-2.864-.895zM5.44 6.44a1.5 1.5 0 0 1 2.12 2.12L4.122 12l3.44 3.44a1.5 1.5 0 0 1-2.121 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12zM16.44 6.44a1.5 1.5 0 0 1 2.12 0l4.5 4.5a1.5 1.5 0 0 1 0 2.12l-4.5 4.5a1.5 1.5 0 1 1-2.12-2.12L19.879 12l-3.44-3.44a1.5 1.5 0 0 1 0-2.12"
        />
        <path
          fill="currentColor"
          d="M13.068 3.553a1.5 1.5 0 0 1 2.864.895l-5 16a1.5 1.5 0 0 1-2.864-.895zM5.44 6.44a1.5 1.5 0 0 1 2.12 2.12L4.122 12l3.44 3.44a1.5 1.5 0 0 1-2.121 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12zM16.44 6.44a1.5 1.5 0 0 1 2.12 0l4.5 4.5a1.5 1.5 0 0 1 0 2.12l-4.5 4.5a1.5 1.5 0 1 1-2.12-2.12L19.879 12l-3.44-3.44a1.5 1.5 0 0 1 0-2.12"
        />
      </svg>
    ))
);
CodeIconFilled.displayName = "CodeIconFilled";
export { CodeIconFilled };
