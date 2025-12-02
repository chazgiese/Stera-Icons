import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonStarIconFilltone = memo(
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
          d="M8.82 1.47a1 1 0 0 1 1.177 1.414 9 9 0 0 0 10.605 12.732 1 1 0 0 1 1.177 1.416A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.03 4.296 2.833 8.82 1.47"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.213 1.943a.3.3 0 0 1 .575 0l.141.466a4 4 0 0 0 2.662 2.663l.466.141a.3.3 0 0 1 0 .574l-.466.142A4 4 0 0 0 18.93 8.59l-.141.466a.3.3 0 0 1-.575 0l-.141-.466a4 4 0 0 0-2.662-2.662l-.467-.142c-.283-.086-.283-.487 0-.574l.467-.141a4 4 0 0 0 2.662-2.663z"
        />
      </svg>
    ))
);
MoonStarIconFilltone.displayName = "MoonStarIconFilltone";
export { MoonStarIconFilltone };
