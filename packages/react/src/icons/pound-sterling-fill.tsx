import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIconFill = memo(
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
          d="M11.903 1.413c2.626-.393 5.584.818 7.383 3.815a1.5 1.5 0 0 1-2.573 1.544c-1.2-2.002-2.993-2.598-4.367-2.392C10.97 4.585 10 5.546 10 7v3.5h4a1.5 1.5 0 0 1 0 3h-4V17c0 .98-.335 1.815-.791 2.5h9.79a1.5 1.5 0 1 1 0 3H5a1.5 1.5 0 0 1-.59-2.879l.012-.005.08-.037a7.38 7.38 0 0 0 1.321-.82C6.606 18.144 7 17.532 7 17V13.5H5a1.5 1.5 0 0 1 0-3h2V7c0-3.154 2.28-5.195 4.903-5.587"
        />
      </svg>
    ))
);
PoundSterlingIconFill.displayName = "PoundSterlingIconFill";
export { PoundSterlingIconFill };
