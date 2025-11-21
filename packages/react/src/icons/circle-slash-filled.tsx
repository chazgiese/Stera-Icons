import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIconFilled = memo(
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
          d="M19.037 20.45c-4.321 3.607-10.758 3.384-14.815-.673S-.06 9.282 3.548 4.961zM4.962 3.547C9.284-.06 15.722.163 19.778 4.22c4.058 4.057 4.28 10.493.673 14.815z"
        />
      </svg>
    ))
);
CircleSlashIconFilled.displayName = "CircleSlashIconFilled";
export { CircleSlashIconFilled };
