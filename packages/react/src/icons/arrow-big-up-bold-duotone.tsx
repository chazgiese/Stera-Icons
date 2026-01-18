import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIconBoldDuotone = memo(
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
          d="M15 13.5a1 1 0 0 0 1 1h1V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3.5h1a1 1 0 0 0 1-1V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.41 3.677a2.25 2.25 0 0 1 3.18 0l8.264 8.263c.944.945.275 2.56-1.06 2.56H16a1 1 0 0 1 0-2h3.586l-7.41-7.409a.25.25 0 0 0-.353 0l-7.409 7.41H8a1 1 0 0 1 0 2H3.207c-1.336 0-2.005-1.616-1.06-2.561z"
        />
      </svg>
    ))
);
ArrowBigUpIconBoldDuotone.displayName = "ArrowBigUpIconBoldDuotone";
export { ArrowBigUpIconBoldDuotone };
