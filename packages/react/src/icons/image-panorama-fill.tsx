import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIconFill = memo(
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
          d="M21.726 4.038A1 1 0 0 1 23 5v14a1 1 0 0 1-1.274.962 44 44 0 0 0-1.986-.519c-5.98-1.41-11.307-1.241-17.466.519A1 1 0 0 1 1 19V5l.007-.117a1.002 1.002 0 0 1 1.267-.845c6.82 1.948 12.631 1.948 19.452 0M21 6.305c-6.225 1.591-11.775 1.591-18 0v4.78L4.616 9.47l.095-.086a1.25 1.25 0 0 1 1.673.086l4.116 4.117 2.116-2.117.095-.086a1.25 1.25 0 0 1 1.578 0l.095.086 6.096 6.096q.259.063.52.13z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePanoramaIconFill.displayName = "ImagePanoramaIconFill";
export { ImagePanoramaIconFill };
