import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderPlusIconDuotone = memo(
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
          <path d="M4 4.75c-.69 0-1.25.56-1.25 1.25v4.25H2a.75.75 0 0 0-.75.75V6A2.75 2.75 0 0 1 4 3.25h4.93c.92 0 1.778.46 2.288 1.225l.812 1.218a1.25 1.25 0 0 0 1.04.557H20A2.75 2.75 0 0 1 22.75 9v2a.75.75 0 0 0-.75-.75h-.75V9c0-.69-.56-1.25-1.25-1.25h-6.93a2.75 2.75 0 0 1-2.288-1.225L9.97 5.307a1.25 1.25 0 0 0-1.04-.557zM18.995 14.25a.75.75 0 0 1 .75.75v2.245H22a.75.75 0 0 1 0 1.5h-2.255V21a.75.75 0 0 1-1.5 0v-2.255H16a.75.75 0 0 1 0-1.5h2.245V15a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M22 10.25a.75.75 0 0 1 0 1.5H2.75V17A2.25 2.25 0 0 0 5 19.25h7a.75.75 0 0 1 0 1.5H5A3.75 3.75 0 0 1 1.25 17v-6a.75.75 0 0 1 .75-.75z"
        />
      </svg>
    ))
);
FolderPlusIconDuotone.displayName = "FolderPlusIconDuotone";
export { FolderPlusIconDuotone };
