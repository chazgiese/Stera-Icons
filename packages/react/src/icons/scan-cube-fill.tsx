import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCubeIconFill = memo(
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
          d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M5.408 9.825c.148-.018.287.056.564.205l5.094 2.745v5.463c0 .284.001.427-.067.538a.5.5 0 0 1-.373.223c-.13.007-.25-.056-.484-.183l-3.08-1.659c-.514-.276-.966-.509-1.303-.868a2.8 2.8 0 0 1-.613-1.027c-.157-.468-.146-.976-.146-1.56v-3.127c0-.29 0-.436.087-.557a.5.5 0 0 1 .321-.193M18.397 9.843c.24-.074.541.104.593.35.01.044.01.07.01.117v3.817c-.004.41-.027.784-.145 1.135a2.8 2.8 0 0 1-.614 1.027c-.337.36-.789.591-1.302.868l-3.08 1.66c-.235.126-.353.19-.484.182a.5.5 0 0 1-.373-.223c-.068-.111-.068-.254-.068-.538v-5.462l5.326-2.87a.7.7 0 0 1 .136-.063M11.45 5.055a2.8 2.8 0 0 1 1.1 0c.442.088.843.315 1.308.566l3.08 1.66.103.054c.267.143.4.215.465.357a.5.5 0 0 1 0 .39c-.065.142-.21.221-.498.377L12 11.157 6.992 8.458c-.288-.155-.433-.233-.498-.375a.5.5 0 0 1 0-.39c.066-.143.199-.214.465-.357l.103-.056 3.08-1.659c.465-.25.867-.478 1.308-.566M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanCubeIconFill.displayName = "ScanCubeIconFill";
export { ScanCubeIconFill };
