import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoolSIconDuotone = memo(
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
          d="M12 6.25a.75.75 0 0 1 .75.75v1.69l4.78 4.78c.14.14.22.331.22.53v4a.75.75 0 0 1-.281.586l-5 4a.75.75 0 0 1-.938 0l-5-4A.75.75 0 0 1 6.25 18v-4a.75.75 0 0 1 .75-.75h2.19l1.5 1.5H7.75v2.889l4.25 3.4 4.25-3.4V14.31l-4.78-4.78A.75.75 0 0 1 11.25 9V7a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.639 1.343a.75.75 0 0 1 .83.071l5 4A.75.75 0 0 1 17.75 6v4a.75.75 0 0 1-.75.75h-2.19l-1.5-1.5h2.94V6.36L12 2.96l-4.25 3.4v3.33l4.78 4.78c.14.14.22.331.22.53v2a.75.75 0 0 1-1.5 0v-1.69l-4.78-4.78a.75.75 0 0 1-.22-.53V6a.75.75 0 0 1 .281-.586l5-4z"
        />
      </svg>
    ))
);
CoolSIconDuotone.displayName = "CoolSIconDuotone";
export { CoolSIconDuotone };
