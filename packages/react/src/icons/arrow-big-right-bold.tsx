import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigRightIconBold = memo(
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
          d="M9.5 3.207c0-1.336 1.616-2.005 2.56-1.06l8.263 8.262a2.25 2.25 0 0 1 0 3.182l-8.263 8.263c-.944.944-2.56.275-2.56-1.061V17H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h3.5zM11.5 8a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5a1 1 0 0 1 1 1v3.586l7.41-7.41a.25.25 0 0 0 0-.353L11.5 4.414z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.5 3.207c0-1.336 1.616-2.005 2.56-1.06l8.263 8.262a2.25 2.25 0 0 1 0 3.182l-8.263 8.263c-.944.944-2.56.275-2.56-1.061V17H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h3.5zM11.5 8a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5a1 1 0 0 1 1 1v3.586l7.41-7.41a.25.25 0 0 0 0-.353L11.5 4.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigRightIconBold.displayName = "ArrowBigRightIconBold";
export { ArrowBigRightIconBold };
