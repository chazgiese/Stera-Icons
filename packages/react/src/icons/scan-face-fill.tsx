import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanFaceIconFill = memo(
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
          d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.002 5.5A6.502 6.502 0 1 1 12 18.503 6.502 6.502 0 0 1 12.002 5.5m2.677 7.645a.626.626 0 0 0-.875.125c-.412.547-1.065.9-1.801.9a2.25 2.25 0 0 1-1.8-.9.625.625 0 0 0-1 .75 3.5 3.5 0 0 0 2.8 1.4 3.5 3.5 0 0 0 2.8-1.4.625.625 0 0 0-.124-.875m-4.69-3.588a1.007 1.007 0 1 0 0 2.013 1.007 1.007 0 0 0 0-2.013m4.027 0a1.007 1.007 0 1 0 0 2.013 1.007 1.007 0 0 0 0-2.013"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanFaceIconFill.displayName = "ScanFaceIconFill";
export { ScanFaceIconFill };
