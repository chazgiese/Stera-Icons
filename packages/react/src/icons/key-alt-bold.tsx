import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyAltBold = memo(
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
          d="M20 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12a6 6 0 0 1-11.197 3h-1.89l-1.206 1.207A1 1 0 0 1 7.2 16.1l-.808-1.079-.685.686a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414l2-2A1 1 0 0 1 4 9h7.803A6 6 0 0 1 23 12m-2 0a4 4 0 0 0-7.668-1.6 1 1 0 0 1-.916.6H4.414l-1 1L5 13.586l.793-.793a1 1 0 0 1 1.506.107l.809 1.077.685-.684A1 1 0 0 1 9.5 13h2.916a1 1 0 0 1 .916.6A4.002 4.002 0 0 0 21 12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyAltBold.displayName = "KeyAltBold";
export { KeyAltBold };
