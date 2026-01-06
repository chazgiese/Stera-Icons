import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderIconDuotone = memo(
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
          d="M4 4.75c-.69 0-1.25.56-1.25 1.25v4.25H2a.75.75 0 0 0-.75.75V6A2.75 2.75 0 0 1 4 3.25h4.93c.92 0 1.778.46 2.288 1.225l.812 1.218a1.25 1.25 0 0 0 1.04.557H20A2.75 2.75 0 0 1 22.75 9v2a.75.75 0 0 0-.75-.75h-.75V9c0-.69-.56-1.25-1.25-1.25h-6.93a2.75 2.75 0 0 1-2.288-1.225L9.97 5.307a1.25 1.25 0 0 0-1.04-.557z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22 10.25a.75.75 0 0 1 .75.75v6A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17v-6a.75.75 0 0 1 .75-.75zM2.75 17A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17v-5.25H2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderIconDuotone.displayName = "FolderIconDuotone";
export { FolderIconDuotone };
