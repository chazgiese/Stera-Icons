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
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M12 2q.138 0 .275.008h-.018c.729.037 1.416.23 2.03.546l.05.026q.391.208.74.48l.043.035a5.03 5.03 0 0 1 1.81 3.08Q17 6.58 17 7a5 5 0 0 1-4.743 4.993l-.514.014a5 5 0 0 0-.01 9.986C6.332 21.851 2 17.433 2 12 2 6.477 6.477 2 12 2m0 3.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
            clipRule="evenodd"
          />
          <path d="M12 15.251a1.75 1.75 0 1 1 0 3.499 1.75 1.75 0 0 1 0-3.499" />
        </g>
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
      </svg>
    ))
);
YinYangIconFilltone.displayName = "YinYangIconFilltone";
export { YinYangIconFilltone };
