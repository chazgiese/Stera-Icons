import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderTreeIconFilled = memo(
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
          d="M14.965 13a2 2 0 0 1 1.664.89l.406.61H20a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zM3 2a1 1 0 0 1 1 1v1.5A1.5 1.5 0 0 0 5.5 6H9a1 1 0 0 1 0 2H5.5c-.537 0-1.045-.12-1.5-.337V15.5l.008.153A1.5 1.5 0 0 0 5.5 17H9a1 1 0 1 1 0 2H5.5a3.5 3.5 0 0 1-3.495-3.32L2 15.5V5q0-.09.016-.174A4 4 0 0 1 2 4.5V3a1 1 0 0 1 1-1M14.965 2a2 2 0 0 1 1.664.89l.406.61H20a2 2 0 0 1 2 2V9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
FolderTreeIconFilled.displayName = "FolderTreeIconFilled";
export { FolderTreeIconFilled };
