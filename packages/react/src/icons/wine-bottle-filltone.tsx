import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleIconFilltone = memo(
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
          d="M13.75 2a1 1 0 0 0-.898-.995L12.75 1h-1.5a1 1 0 0 0-1 1v5.645a3.5 3.5 0 0 1 1-.145h1.5a3.5 3.5 0 0 1 1 .145z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.25 7.646A3.5 3.5 0 0 0 7.75 11v10a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2V11a3.5 3.5 0 0 0-3.5-3.5h-1.5a3.5 3.5 0 0 0-1 .146"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
WineBottleIconFilltone.displayName = "WineBottleIconFilltone";
export { WineBottleIconFilltone };
