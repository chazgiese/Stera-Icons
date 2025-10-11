import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorOgIconBold = memo(
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
          d="M6.588 1.54a1 1 0 0 1 1.073.16l12.762 11.242a1.001 1.001 0 0 1-.528 1.74l-3.842.515 1.918 4.243a1 1 0 0 1-.5 1.323l-3.645 1.647a1 1 0 0 1-1.323-.499l-1.918-4.243-2.924 2.544a1.002 1.002 0 0 1-1.656-.754L6 2.45a1 1 0 0 1 .588-.91m1.416 15.723 2.283-1.986.093-.072a1 1 0 0 1 1.474.414l2.06 4.557 1.822-.824-2.06-4.556a1 1 0 0 1 .78-1.403l2.998-.402L8 4.663z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorOgIconBold.displayName = "CursorOgIconBold";
export { CursorOgIconBold };
