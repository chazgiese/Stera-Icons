import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderIconBoldDuotone = memo(
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
          d="M4 5a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1V6a3 3 0 0 1 3-3h4.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H20a3 3 0 0 1 3 3v2a1 1 0 0 0-1-1h-1V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 8.93 5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1zM3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5H3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderIconBoldDuotone.displayName = "FolderIconBoldDuotone";
export { FolderIconBoldDuotone };
