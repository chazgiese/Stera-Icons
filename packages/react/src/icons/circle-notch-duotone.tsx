import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconDuotone = memo(
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
          d="M12.528 1.263a10.75 10.75 0 0 1 7.074 3.135.75.75 0 0 0-1.061 1.061 9.25 9.25 0 0 0-13.082 0 .75.75 0 0 0-1.06-1.06 10.75 10.75 0 0 1 7.073-3.136L12 1.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.541 4.399a.75.75 0 0 1 1.06 0 10.75 10.75 0 1 1-15.202 0 .75.75 0 0 1 1.06 1.06 9.25 9.25 0 1 0 13.082 0 .75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
CircleNotchIconDuotone.displayName = "CircleNotchIconDuotone";
export { CircleNotchIconDuotone };
