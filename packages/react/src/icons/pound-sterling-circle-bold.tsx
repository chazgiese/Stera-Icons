import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingCircleIconBold = memo(
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
          d="M11.929 5.79c1.539-.222 3.283.46 4.348 2.17a1 1 0 1 1-1.698 1.058c-.65-1.043-1.619-1.355-2.365-1.247C11.46 7.879 11 8.366 11 9.04v1.754h2.143a1 1 0 0 1 0 2H11v1.753c0 .457-.127.858-.312 1.203H16a1 1 0 1 1 0 2H8a1 1 0 0 1-.462-1.887l.08-.037.005-.003.043-.02a4.103 4.103 0 0 0 .73-.436c.445-.337.604-.627.604-.82v-1.753H8a1 1 0 0 1 0-2h1V9.04c0-1.864 1.397-3.03 2.929-3.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PoundSterlingCircleIconBold.displayName = "PoundSterlingCircleIconBold";
export { PoundSterlingCircleIconBold };
