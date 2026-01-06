import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CloudIconFillDuotone = memo(
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
          d="M12 6a5 5 0 0 1 4.718 3.344 1 1 0 0 0 1.01.667A4 4 0 1 1 18 18H4.999a3 3 0 1 1 .753-5.907 1 1 0 0 0 1.25-.989L7 11a5 5 0 0 1 5-5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4m0 2a5 5 0 0 0-5 5l.003.105a1 1 0 0 1-1.25.989A3 3 0 1 0 5 18h13a4 4 0 1 0-.273-7.99 1 1 0 0 1-1.01-.666A5 5 0 0 0 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CloudIconFillDuotone.displayName = "CloudIconFillDuotone";
export { CloudIconFillDuotone };
