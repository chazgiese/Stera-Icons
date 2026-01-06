import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconBold = memo(
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
          d="M5.794 2.041c1.696-.15 2.913-.06 3.904.186.99.244 1.702.633 2.328.963.622.326 1.195.615 2.03.812.845.199 2.007.314 3.776.206C18.961 4.14 20 5.018 20 6.22v7.918a1.98 1.98 0 0 1-1.821 1.978c-2.048.159-3.491.048-4.626-.223-1.143-.273-1.921-.698-2.591-1.055-.658-.351-1.207-.636-2.02-.802-.686-.14-1.601-.2-2.942-.085V21a1 1 0 1 1-2 0V4.015c0-1.005.76-1.882 1.794-1.974m3.425 2.127C8.503 3.991 7.526 3.898 6 4.03v7.915c1.393-.108 2.457-.049 3.34.131 1.119.228 1.886.635 2.564.997.667.356 1.244.667 2.113.874.872.209 2.089.322 3.983.177V6.223l-.004-.004a.06.06 0 0 0-.042-.015c-1.905.116-3.271 0-4.355-.255-1.093-.257-1.85-.646-2.503-.989-.648-.34-1.156-.614-1.877-.792"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlagIconBold.displayName = "FlagIconBold";
export { FlagIconBold };
