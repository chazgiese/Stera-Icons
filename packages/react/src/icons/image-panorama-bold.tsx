import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIconBold = memo(
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
          d="M18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.726 4.038A1 1 0 0 1 23 5v14a1 1 0 0 1-1.274.962c-6.82-1.95-12.631-1.95-19.452 0A1 1 0 0 1 1 19V5l.007-.117a1.002 1.002 0 0 1 1.267-.845c6.82 1.948 12.631 1.948 19.452 0M3 13.914v3.779c4.85-1.24 9.29-1.513 13.958-.821L13.5 13.414 11.914 15a2 2 0 0 1-2.828 0L5.5 11.414zm18-7.609c-6.225 1.591-11.775 1.591-18 0v4.78L4.086 10a2 2 0 0 1 2.828 0l3.586 3.586L12.086 12a2 2 0 0 1 2.828 0l5.563 5.563q.26.063.523.13z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePanoramaIconBold.displayName = "ImagePanoramaIconBold";
export { ImagePanoramaIconBold };
