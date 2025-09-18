import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VideoOffFilled = memo(
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
          d="M.229 4.365a1 1 0 0 1 1.407-.136l17 14a1 1 0 0 1-1.271 1.543l-17-14a1 1 0 0 1-.136-1.407M14.041 18.979c-.352.02-.768.021-1.24.021H5.2c-.544 0-1.012.001-1.396-.03-.395-.032-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.193-.379-.265-.772-.297-1.167C.999 15.812 1 15.343 1 14.8V9.2q-.002-.526.007-.955zM21.36 6.232a1 1 0 0 1 1.63.625L23 7v10a1 1 0 0 1-1.64.769l-3-2.5A1 1 0 0 1 18 14.5v-5a1 1 0 0 1 .36-.768zM12.8 5c.544 0 1.012 0 1.396.03.395.033.789.105 1.167.297a3 3 0 0 1 1.31 1.311c.193.378.265.772.297 1.167.031.384.03.852.03 1.395v5.738L4.932 5c2.622-.003 5.245 0 7.867 0"
        />
      </svg>
    ))
);
VideoOffFilled.displayName = "VideoOffFilled";
export { VideoOffFilled };
