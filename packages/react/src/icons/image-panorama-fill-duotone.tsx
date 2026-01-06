import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIconFillDuotone = memo(
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
          fillRule="evenodd"
          d="M21.726 4.038A1 1 0 0 1 23 5v14a1 1 0 0 1-1.274.962c-6.82-1.95-12.631-1.95-19.452 0A1 1 0 0 1 1 19V5l.007-.116a1.002 1.002 0 0 1 1.267-.846c6.82 1.948 12.631 1.948 19.452 0M21 6.305c-6.225 1.591-11.775 1.591-18 0v11.388c6.225-1.591 11.775-1.591 18 0z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.87 9.225a1 1 0 0 1 1.337.068l4.293 4.293 2.293-2.293.076-.068a1 1 0 0 1 1.338.068l6.27 6.27c-6.014-1.46-11.426-1.416-17.477.13v-6.607l1.793-1.793zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ImagePanoramaIconFillDuotone.displayName = "ImagePanoramaIconFillDuotone";
export { ImagePanoramaIconFillDuotone };
