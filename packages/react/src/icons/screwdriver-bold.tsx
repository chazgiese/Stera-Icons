import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconBold = memo(
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
          d="M16.698 5.888a1 1 0 0 1 1.415 1.414L15.57 9.844a1 1 0 0 1-1.414-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.156 3.346a4.595 4.595 0 0 1 6.498 6.498l-3.813 3.813a1 1 0 0 1-.707.293h-.875l-.263 1.315a1 1 0 0 1-.273.51l-1.695 1.696c-.39.39-1.024.39-1.415 0l-1.835-1.835-6.07 6.071a1 1 0 1 1-1.415-1.414l6.07-6.072-1.834-1.834a1 1 0 0 1 0-1.415l1.696-1.695.111-.096a1 1 0 0 1 .4-.177l1.314-.264v-.874a1 1 0 0 1 .293-.707zM19.24 4.76a2.595 2.595 0 0 0-3.67 0l-3.52 3.52v1.28a1 1 0 0 1-.804.981l-1.822.364-.772.774 3.669 3.669.773-.773.365-1.821.02-.086a1 1 0 0 1 .96-.718h1.28l3.521-3.52a2.595 2.595 0 0 0 0-3.67"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrewdriverIconBold.displayName = "ScrewdriverIconBold";
export { ScrewdriverIconBold };
