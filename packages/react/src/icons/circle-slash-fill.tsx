import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIconFill = memo(
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
          d="M19.037 20.45c-4.322 3.607-10.758 3.385-14.815-.673S-.06 9.283 3.548 4.961zM4.962 3.547C9.283-.06 15.72.164 19.778 4.22s4.28 10.493.673 14.815z"
        />
      </svg>
    ))
);
CircleSlashIconFill.displayName = "CircleSlashIconFill";
export { CircleSlashIconFill };
