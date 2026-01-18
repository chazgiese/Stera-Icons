import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigUpIcon = memo(
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
          d="M10.586 3.854a2 2 0 0 1 2.828 0l8.262 8.263c.788.787.23 2.133-.883 2.133H16.75V18A2.75 2.75 0 0 1 14 20.75h-4A2.75 2.75 0 0 1 7.25 18v-3.75H3.207c-1.113 0-1.671-1.346-.884-2.133zm1.767 1.06a.5.5 0 0 0-.707 0L3.81 12.75H8a.75.75 0 0 1 .75.75V18c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4.5a.75.75 0 0 1 .75-.75h4.189z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigUpIcon.displayName = "ArrowBigUpIcon";
export { ArrowBigUpIcon };
