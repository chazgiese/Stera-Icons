import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDivideIconBold = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-1 2.057C6.5 3.554 3 7.367 3 12s3.5 8.445 8 8.942zm2 17.885c4.5-.497 8-4.31 8-8.942s-3.5-8.446-8-8.943z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleDivideIconBold.displayName = "CircleDivideIconBold";
export { CircleDivideIconBold };
