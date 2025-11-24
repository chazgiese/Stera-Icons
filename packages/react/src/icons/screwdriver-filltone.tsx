import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconFilltone = memo(
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
          d="M14.155 3.346a4.595 4.595 0 0 1 6.499 6.498l-3.813 3.813a1 1 0 0 1-.707.293h-.875l-.263 1.315a1 1 0 0 1-.273.51l-1.696 1.696a1 1 0 0 1-1.413 0l-5.085-5.084a1 1 0 0 1 0-1.415l1.695-1.695.111-.096c.118-.088.255-.148.4-.177l1.315-.264v-.874a1 1 0 0 1 .293-.707zm3.958 2.542a1 1 0 0 0-1.415 0L14.156 8.43a1 1 0 1 0 1.414 1.414l2.543-2.542a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m9.778 15.636-6.07 6.071a1 1 0 0 1-1.415-1.415l6.07-6.071zM16.698 5.888a1 1 0 0 1 1.414 1.414L15.57 9.844a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ScrewdriverIconFilltone.displayName = "ScrewdriverIconFilltone";
export { ScrewdriverIconFilltone };
