import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M10.919 9.393 9.742 12.14c-.16.374-.242.776-.242 1.182V19.5a2.5 2.5 0 0 1-5 0V13.32c0-.406-.082-.808-.242-1.181L3.087 9.407A1 1 0 0 0 4 10h1.517l.579 1.351c.266.623.404 1.293.404 1.97V19.5a.5.5 0 0 0 1 0V13.32c0-.677.138-1.347.404-1.97L8.484 10H10a1 1 0 0 0 .919-.607M19 4.329c-1.37.487-2.229 1.182-2.818 2.311-.747 1.431-1.125 3.67-1.175 7.36H16v2h-2a1 1 0 0 1-1-.998c-.008-4.298.349-7.256 1.408-9.287 1.122-2.15 2.946-3.121 5.364-3.689A1 1 0 0 1 21 3v11h-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 19.5a2.5 2.5 0 0 1-5 0V14h5zm-3 0a.5.5 0 0 0 1 0V16h-1z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10 2a1 1 0 0 1 1 1v6l-.005.103A1 1 0 0 1 10 10H4a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v5h1V3.5a1 1 0 0 1 2 0V8h1V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ForkKnifeIconBoldDuotone.displayName = "ForkKnifeIconBoldDuotone";
export { ForkKnifeIconBoldDuotone };
