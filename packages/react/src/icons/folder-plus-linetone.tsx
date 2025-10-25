import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderPlusIconLinetone = memo(
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
          d="M22 10a1 1 0 1 1 0 2H3v5a2 2 0 0 0 2 2h7a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M18.995 14a1 1 0 0 1 1 1v1.995H22a1 1 0 1 1 0 2h-2.005V21a1 1 0 0 1-2 0v-2.005H16a1 1 0 0 1 0-2h1.995V15a1 1 0 0 1 1-1" />
          <path
            fillRule="evenodd"
            d="M8.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H20a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 8.93 5z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ))
);
FolderPlusIconLinetone.displayName = "FolderPlusIconLinetone";
export { FolderPlusIconLinetone };
