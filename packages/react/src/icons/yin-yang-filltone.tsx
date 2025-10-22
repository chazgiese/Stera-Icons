import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const YinYangIconFilltone = memo(
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
          d="M12.515 2.014C17.798 2.282 22 6.65 22 12c0 5.523-4.477 10-10 10a5 5 0 0 1-.257-9.993l.514-.014a5 5 0 0 0 0-9.986zM12 15.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        />
        <g fill="currentColor" opacity={0.32}>
          <path d="M12 2a5 5 0 0 1 .257 9.993l-.514.014A5 5 0 0 0 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2" />
          <path d="M12 15.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        </g>
      </svg>
    ))
);
YinYangIconFilltone.displayName = "YinYangIconFilltone";
export { YinYangIconFilltone };
