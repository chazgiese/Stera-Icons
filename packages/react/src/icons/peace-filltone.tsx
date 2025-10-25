import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1q.505 0 1 .045v10.54l7.453 7.454q-.642.77-1.414 1.414L13 14.414v8.541a11 11 0 0 1-2 0v-8.54l-6.04 6.038a11 11 0 0 1-1.413-1.414L11 11.586V1.045Q11.495 1 12 1"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 1.045a11 11 0 0 0-2 0v10.54L3.547 19.04q.643.771 1.414 1.414L11 14.414v8.541a11 11 0 0 0 2 0v-8.54l6.038 6.038q.771-.642 1.414-1.414L13 11.586z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PeaceIconFilltone.displayName = "PeaceIconFilltone";
export { PeaceIconFilltone };
