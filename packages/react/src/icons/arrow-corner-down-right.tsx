import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIcon = memo(
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
          d="M3 3.25a.75.75 0 0 0-.75.75v8A3.75 3.75 0 0 0 6 15.75h13.19l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5 .094-.114a1 1 0 0 0 .059-.107l.018-.048q.017-.045.027-.091.006-.02.01-.041l.006-.034a.748.748 0 0 0-.214-.625l-5-5a.75.75 0 1 0-1.06 1.06l3.72 3.72H6A2.25 2.25 0 0 1 3.75 12V4A.75.75 0 0 0 3 3.25"
        />
      </svg>
    ))
);
ArrowCornerDownRightIcon.displayName = "ArrowCornerDownRightIcon";
export { ArrowCornerDownRightIcon };
