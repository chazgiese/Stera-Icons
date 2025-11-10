import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIconFilled = memo(
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
          d="M10.34 3.14a2.5 2.5 0 0 1 3.323 0l8.002 7.113a1 1 0 0 1-1.329 1.495l-.856-.762L17.954 19H19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1.046L4.52 10.987l-.855.76a1 1 0 0 1-1.329-1.494zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BirdhouseIconFilled.displayName = "BirdhouseIconFilled";
export { BirdhouseIconFilled };
