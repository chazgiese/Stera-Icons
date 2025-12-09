import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIconFilltone = memo(
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
          d="m17.454 12.99-2.998.402a1 1 0 0 0-.78 1.403l2.06 4.556-1.823.824-2.059-4.557a1 1 0 0 0-1.474-.414l-.093.072-2.283 1.986L8 4.662z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.588 1.538A1 1 0 0 1 7.66 1.7l12.762 11.24a1 1 0 0 1-.528 1.742l-3.842.514 1.918 4.243a1 1 0 0 1-.5 1.323l-3.645 1.648a1 1 0 0 1-1.323-.5l-1.918-4.243-2.924 2.544a1.001 1.001 0 0 1-1.656-.754L6 2.45a1 1 0 0 1 .588-.912m1.416 15.724 2.283-1.985.093-.073a1 1 0 0 1 1.474.414l2.06 4.557 1.822-.824-2.06-4.556a1 1 0 0 1 .78-1.403l2.998-.401L8 4.662z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorOgIconFilltone.displayName = "CursorOgIconFilltone";
export { CursorOgIconFilltone };
