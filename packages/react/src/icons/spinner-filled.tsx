import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpinnerIconFilled = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_5005_1761)">
          <path d="M12 17.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5M5.986 15.893a1.5 1.5 0 1 1 2.121 2.12l-2.12 2.122a1.5 1.5 0 1 1-2.122-2.121zM15.886 15.893a1.5 1.5 0 0 1 2.12 0l2.122 2.12a1.5 1.5 0 1 1-2.121 2.122l-2.121-2.121a1.5 1.5 0 0 1 0-2.121M5 10.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 10.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3zM3.864 3.87a1.5 1.5 0 0 1 2.122 0l2.121 2.12a1.5 1.5 0 0 1-2.12 2.121l-2.123-2.12a1.5 1.5 0 0 1 0-2.122M18.007 3.87a1.5 1.5 0 1 1 2.12 2.12l-2.12 2.121a1.5 1.5 0 1 1-2.121-2.12zM12 .5A1.5 1.5 0 0 1 13.5 2v3a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 12 .5" />
          <path d="M12 17.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5M5.986 15.893a1.5 1.5 0 1 1 2.121 2.12l-2.12 2.122a1.5 1.5 0 1 1-2.122-2.121zM15.886 15.893a1.5 1.5 0 0 1 2.12 0l2.122 2.12a1.5 1.5 0 1 1-2.121 2.122l-2.121-2.121a1.5 1.5 0 0 1 0-2.121M5 10.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 10.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3zM3.864 3.87a1.5 1.5 0 0 1 2.122 0l2.121 2.12a1.5 1.5 0 0 1-2.12 2.121l-2.123-2.12a1.5 1.5 0 0 1 0-2.122M18.007 3.87a1.5 1.5 0 1 1 2.12 2.12l-2.12 2.121a1.5 1.5 0 1 1-2.121-2.12zM12 .5A1.5 1.5 0 0 1 13.5 2v3a1.5 1.5 0 0 1-3 0V2A1.5 1.5 0 0 1 12 .5" />
        </g>
      </svg>
    ))
);
SpinnerIconFilled.displayName = "SpinnerIconFilled";
export { SpinnerIconFilled };
