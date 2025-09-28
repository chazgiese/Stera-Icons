import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigDown = memo(
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
          d="M14 3.25A2.75 2.75 0 0 1 16.75 6v3.75h4.043c1.113 0 1.67 1.346.883 2.134l-8.262 8.263a2 2 0 0 1-2.828 0l-8.263-8.263c-.787-.788-.23-2.134.884-2.134H7.25V6A2.75 2.75 0 0 1 10 3.25zm-4 1.5c-.69 0-1.25.56-1.25 1.25v4.5a.75.75 0 0 1-.75.75H3.81l7.836 7.836a.5.5 0 0 0 .707 0l7.836-7.836H16a.75.75 0 0 1-.75-.75V6c0-.69-.559-1.25-1.25-1.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowBigDown.displayName = "ArrowBigDown";
export { ArrowBigDown };
