import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDots = memo(
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
          d="M12.004 19.5a1.5 1.5 0 0 1 .002 3h-.012a1.5 1.5 0 0 1 .002-3zM4.572 17.299a1.5 1.5 0 0 1 2.121.002l.006.006a1.5 1.5 0 1 1-2.12 2.122l-.008-.008a1.5 1.5 0 0 1 .001-2.122M17.307 17.3a1.5 1.5 0 1 1 2.114 2.129 1.5 1.5 0 1 1-2.114-2.128M3.001 10.495A1.5 1.5 0 0 1 4.5 11.996v.008a1.5 1.5 0 0 1-3 .002v-.012a1.5 1.5 0 0 1 1.501-1.499M20.999 10.495c.828 0 1.5.67 1.501 1.5v.01a1.5 1.5 0 0 1-3-.001v-.008c0-.828.67-1.5 1.499-1.5M4.58 4.571A1.5 1.5 0 1 1 6.692 6.7 1.5 1.5 0 1 1 4.58 4.571M17.299 4.572a1.5 1.5 0 0 1 2.122 0l.008.007a1.5 1.5 0 0 1-2.122 2.12l-.006-.006a1.5 1.5 0 0 1-.002-2.12M12.006 1.5a1.5 1.5 0 0 1-.002 3h-.008a1.5 1.5 0 0 1-.002-3z"
        />
      </svg>
    ))
);
CircleDots.displayName = "CircleDots";
export { CircleDots };
