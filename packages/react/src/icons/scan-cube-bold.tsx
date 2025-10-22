import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanCubeIconBold = memo(
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
          d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.254 4.454c.492-.098 1-.098 1.492 0 .59.118 1.13.421 1.852.81l2.02 1.087c.795.428 1.402.74 1.853 1.22.375.4.659.875.833 1.395.209.624.196 1.307.196 2.21v1.648c0 .903.013 1.586-.196 2.21-.174.52-.458.995-.833 1.395-.45.48-1.058.792-1.853 1.22l-2.02 1.087c-.721.389-1.261.692-1.852.81a3.8 3.8 0 0 1-1.492 0c-.59-.118-1.13-.421-1.852-.81l-2.02-1.087c-.795-.428-1.402-.74-1.853-1.22-.375-.4-.659-.875-.833-1.395-.209-.624-.196-1.307-.196-2.21v-1.648c0-.903-.013-1.586.196-2.21.174-.52.458-.995.833-1.395.45-.48 1.058-.792 1.853-1.22l2.02-1.087c.721-.389 1.261-.692 1.852-.81m-4.741 5.727c-.01.227-.013.539-.013.995v1.648c0 1.043.012 1.334.093 1.575.082.246.217.472.394.66.174.186.425.334 1.343.829l2.02 1.088c.274.147.484.257.65.341v-4.72zM13 12.598v4.72c.166-.085.376-.195.65-.342l2.02-1.088c.918-.495 1.168-.643 1.343-.828a1.8 1.8 0 0 0 .394-.66c.081-.242.093-.533.093-1.576v-1.648c0-.456-.004-.768-.014-.995zm-.646-6.183a1.8 1.8 0 0 0-.707 0c-.23.046-.465.162-1.296.61L8.33 8.111c-.304.164-.534.29-.713.392l4.383 2.36 4.38-2.36a36 36 0 0 0-.711-.392l-2.02-1.088c-.832-.447-1.068-.563-1.296-.609"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanCubeIconBold.displayName = "ScanCubeIconBold";
export { ScanCubeIconBold };
