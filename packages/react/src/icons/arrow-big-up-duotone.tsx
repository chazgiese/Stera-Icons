import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIconDuotone = memo(
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
          d="M15.25 13.5c0 .414.336.75.75.75h.75v4.25a2.25 2.25 0 0 1-2.25 2.25h-5a2.25 2.25 0 0 1-2.25-2.25v-4.25H8a.75.75 0 0 0 .75-.75v5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.586 3.854a2 2 0 0 1 2.828 0l8.262 8.263c.788.787.23 2.133-.883 2.133H16a.75.75 0 0 1 0-1.5h4.189l-7.836-7.836a.5.5 0 0 0-.707 0L3.81 12.75H8a.75.75 0 0 1 0 1.5H3.207c-1.113 0-1.671-1.346-.884-2.133z"
        />
      </svg>
    ))
);
ArrowBigUpIconDuotone.displayName = "ArrowBigUpIconDuotone";
export { ArrowBigUpIconDuotone };
