import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIconFilltone = memo(
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
          d="M19.558 19.08A4 4 0 0 1 15.709 22H9.5a2 2 0 0 1-2-2V8.948a2.45 2.45 0 0 0 1.624-1.18l3.008-5.264.073-.111A1 1 0 0 1 13 2c1.174 0 2.123.381 2.795 1.1.647.694.935 1.595 1.032 2.46.127 1.134-.054 2.373-.37 3.44h1.82c1.772 0 3.194 1.544 2.939 3.346-.079.553-.17 1.136-.268 1.635-.153.782-.506 2.073-.81 3.133-.153.538-.298 1.03-.404 1.386l-.111.371q-.008.028-.016.052l-.035.116-.006.02-.003.011z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3 13a4 4 0 0 1 4-4q.255 0 .5-.05V20a2 2 0 0 0 2 2H6c-1.656 0-3-1.34-3-2.997z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThumbsUpIconFilltone.displayName = "ThumbsUpIconFilltone";
export { ThumbsUpIconFilltone };
