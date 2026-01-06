import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIconBoldDuotone = memo(
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
          d="M21 3c0 4.05-.377 6.902-1.209 9.178-.84 2.302-2.119 3.936-3.77 5.588a7.63 7.63 0 0 1-9.956.717c.262-.354.476-.611.584-.72v.002l.77-.77a5.63 5.63 0 0 0 7.188-.643c1.534-1.535 2.6-2.93 3.305-4.86.653-1.786 1.02-4.093 1.079-7.482-3.844.073-6.295.57-8.045 1.288-1.877.77-3.026 1.825-4.297 3.096a5.63 5.63 0 0 0-.645 7.186l-.77.77c-.157.159-.373.411-.612.722A7.626 7.626 0 0 1 5.235 6.98c1.317-1.317 2.696-2.606 4.952-3.532C12.42 2.531 15.433 2 20 2h1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.377 12.207a1 1 0 0 1 1.414 1.414L6.65 17.764l-.001-.001c-.172.171-.613.719-1.086 1.434-.471.713-.906 1.493-1.114 2.119a1 1 0 1 1-1.897-.632c.291-.874.838-1.826 1.343-2.59.502-.759 1.03-1.434 1.34-1.744z"
        />
      </svg>
    ))
);
LeafIconBoldDuotone.displayName = "LeafIconBoldDuotone";
export { LeafIconBoldDuotone };
