import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingIconFilled = memo(
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
          d="M11.903 1.413c2.626-.393 5.584.818 7.382 3.815a1.5 1.5 0 0 1-2.572 1.544C15.512 4.77 13.72 4.174 12.346 4.38 10.97 4.585 10 5.546 10 7v3.5h4a1.5 1.5 0 0 1 0 3h-4V17c0 .98-.335 1.815-.79 2.5h9.79a1.5 1.5 0 1 1 0 3H5a1.5 1.5 0 0 1-.59-2.879l.011-.005.081-.037a7.38 7.38 0 0 0 1.321-.82C6.606 18.144 7 17.532 7 17V13.5H5a1.5 1.5 0 0 1 0-3h2V7c0-3.154 2.28-5.195 4.904-5.587"
        />
      </svg>
    ))
);
PoundSterlingIconFilled.displayName = "PoundSterlingIconFilled";
export { PoundSterlingIconFilled };
