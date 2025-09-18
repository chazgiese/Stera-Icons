import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderPlus = memo(
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
          d="M18.995 14.25a.75.75 0 0 1 .75.75v2.245H22a.75.75 0 0 1 0 1.5h-2.255V21a.75.75 0 0 1-1.5 0v-2.255H16a.75.75 0 0 1 0-1.5h2.245V15a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.93 3.25c.92 0 1.778.46 2.288 1.225l.812 1.218a1.25 1.25 0 0 0 1.04.557H20A2.75 2.75 0 0 1 22.75 9v2a.75.75 0 0 1-.75.75H2.75V17A2.25 2.25 0 0 0 5 19.25h7a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17V6A2.75 2.75 0 0 1 4 3.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v4.25h18.5V9c0-.69-.56-1.25-1.25-1.25h-6.93a2.75 2.75 0 0 1-2.288-1.225L9.97 5.307a1.25 1.25 0 0 0-1.04-.557z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderPlus.displayName = "FolderPlus";
export { FolderPlus };
