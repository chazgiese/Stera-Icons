import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeIconFill = memo(
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
          d="M12 2a6.5 6.5 0 0 1 6.5 6.5 6.48 6.48 0 0 1-1.858 4.547l2.529 5.058c.665 1.33-.302 2.895-1.79 2.895H6.619a2 2 0 0 1-1.789-2.895l2.53-5.058A6.5 6.5 0 0 1 12 2"
        />
      </svg>
    ))
);
KeyholeIconFill.displayName = "KeyholeIconFill";
export { KeyholeIconFill };
