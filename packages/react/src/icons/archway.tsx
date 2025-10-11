import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchwayIcon = memo(
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
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v9A3.75 3.75 0 0 1 17 22.75H7A3.75 3.75 0 0 1 3.25 19v-9A8.75 8.75 0 0 1 12 1.25m0 1.5A7.25 7.25 0 0 0 4.75 10v9A2.25 2.25 0 0 0 7 21.25h10A2.25 2.25 0 0 0 19.25 19v-9A7.25 7.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArchwayIcon.displayName = "ArchwayIcon";
export { ArchwayIcon };
