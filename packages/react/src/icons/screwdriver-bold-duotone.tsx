import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconBoldDuotone = memo(
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
          d="M14.155 3.346a4.595 4.595 0 0 1 6.499 6.498l-3.813 3.813a1 1 0 0 1-.707.293h-.875l-.263 1.315a1 1 0 0 1-.273.51l-1.696 1.696a1 1 0 0 1-1.413 0l-5.085-5.084a1 1 0 0 1 0-1.415l1.695-1.695.111-.096c.118-.088.255-.148.4-.177l1.315-.264v-.874a1 1 0 0 1 .293-.707zM19.24 4.76a2.595 2.595 0 0 0-3.67 0L12.05 8.28v1.28a1 1 0 0 1-.805.981l-1.822.364-.772.774 3.67 3.67.772-.774.365-1.821a1 1 0 0 1 .98-.804h1.282l3.52-3.52a2.595 2.595 0 0 0 0-3.67"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m9.778 15.636-6.07 6.071a1 1 0 0 1-1.415-1.415l6.07-6.071zM16.698 5.888a1 1 0 0 1 1.415 1.414L15.57 9.844a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ScrewdriverIconBoldDuotone.displayName = "ScrewdriverIconBoldDuotone";
export { ScrewdriverIconBoldDuotone };
