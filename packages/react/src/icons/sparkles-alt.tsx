import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltIcon = memo(
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
          d="M7.5 10.25a.75.75 0 0 1 .732.587 6.49 6.49 0 0 0 4.931 4.93.75.75 0 0 1 0 1.465 6.49 6.49 0 0 0-4.93 4.931.75.75 0 0 1-1.465 0 6.49 6.49 0 0 0-4.931-4.93.75.75 0 0 1 0-1.465 6.49 6.49 0 0 0 4.93-4.931l.04-.123a.75.75 0 0 1 .693-.464m0 2.903A8 8 0 0 1 4.153 16.5 8 8 0 0 1 7.5 19.846a8 8 0 0 1 3.346-3.346A8 8 0 0 1 7.5 13.153M16.5 1.25a.75.75 0 0 1 .732.587 6.49 6.49 0 0 0 4.931 4.93.75.75 0 0 1 0 1.465 6.49 6.49 0 0 0-4.93 4.931.75.75 0 0 1-1.465 0 6.49 6.49 0 0 0-4.931-4.93.75.75 0 0 1 0-1.465 6.49 6.49 0 0 0 4.93-4.931l.04-.123a.75.75 0 0 1 .693-.464m0 2.903A8 8 0 0 1 13.153 7.5a8 8 0 0 1 3.347 3.346A8 8 0 0 1 19.846 7.5 8 8 0 0 1 16.5 4.153"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesAltIcon.displayName = "SparklesAltIcon";
export { SparklesAltIcon };
