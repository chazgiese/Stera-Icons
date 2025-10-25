import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlameIconFilltone = memo(
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
          d="M11.37 1.223c.367-.288.852-.327 1.26 0 .41.327.879.754 1.3 1.144a38 38 0 0 1 2.827 2.915c1.027 1.189 2.076 2.578 2.872 4.045.791 1.46 1.37 3.066 1.371 4.672a9 9 0 0 1-18 0c0-1.606.58-3.213 1.371-4.672.796-1.467 1.844-2.856 2.872-4.045a38 38 0 0 1 2.827-2.915c.421-.39.93-.856 1.3-1.144"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.35 11.742a1 1 0 0 1 1.3 0h.003l.003.004.011.01.035.03.125.113a15.829 15.829 0 0 1 1.712 1.862c.906 1.165 1.961 2.891 1.961 4.74 0 1.549-.635 2.708-1.555 3.46-.888.727-1.995 1.04-2.945 1.04s-2.057-.313-2.945-1.04c-.92-.752-1.555-1.911-1.555-3.46 0-1.849 1.055-3.575 1.96-4.74a16 16 0 0 1 1.713-1.862q.079-.072.125-.112l.035-.032.01-.01.004-.002z"
        />
      </svg>
    ))
);
FlameIconFilltone.displayName = "FlameIconFilltone";
export { FlameIconFilltone };
