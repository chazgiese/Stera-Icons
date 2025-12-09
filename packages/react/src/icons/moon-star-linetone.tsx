import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonStarIconLinetone = memo(
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
          d="M8.82 1.469a1 1 0 0 1 1.177 1.415 9 9 0 0 0 10.605 12.732 1 1 0 0 1 1.177 1.416A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.03 4.296 2.833 8.82 1.47M7.334 4.305A9 9 0 0 0 12 21a8.97 8.97 0 0 0 6.724-3.025q-.359.024-.724.025C11.925 18 7 13.075 7 7c0-.93.117-1.833.335-2.695"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.213 1.943a.3.3 0 0 1 .575 0l.141.466a4 4 0 0 0 2.662 2.663l.466.141a.3.3 0 0 1 0 .574l-.466.142A4 4 0 0 0 18.93 8.59l-.141.466a.3.3 0 0 1-.575 0l-.141-.466a4 4 0 0 0-2.662-2.662l-.467-.142c-.283-.086-.283-.487 0-.574l.467-.141a4 4 0 0 0 2.662-2.663z"
        />
      </svg>
    ))
);
MoonStarIconLinetone.displayName = "MoonStarIconLinetone";
export { MoonStarIconLinetone };
