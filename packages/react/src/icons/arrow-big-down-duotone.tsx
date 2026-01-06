import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDownIconDuotone = memo(
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
          d="M8 9.75a.75.75 0 0 1 0 1.5H3.81l7.836 7.836a.5.5 0 0 0 .707 0l7.836-7.836h-4.19a.75.75 0 0 1 0-1.5h4.794c1.113 0 1.67 1.346.883 2.134l-8.262 8.263a2 2 0 0 1-2.828 0l-8.263-8.263c-.787-.788-.23-2.134.884-2.134z"
        />
        <path
          fill="currentColor"
          d="M14.5 3.25a2.25 2.25 0 0 1 2.25 2.25v4.25H16a.75.75 0 0 0-.75.75v-5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v5A.75.75 0 0 0 8 9.75h-.75V5.5A2.25 2.25 0 0 1 9.5 3.25z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowBigDownIconDuotone.displayName = "ArrowBigDownIconDuotone";
export { ArrowBigDownIconDuotone };
