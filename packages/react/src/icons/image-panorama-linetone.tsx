import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIconLinetone = memo(
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
          d="M4.086 10a2 2 0 0 1 2.828 0l3.586 3.586L12.086 12a2 2 0 0 1 2.828 0l5.563 5.564a39 39 0 0 0-3.519-.692L13.5 13.414 11.914 15a2 2 0 0 1-2.828 0L5.5 11.414l-2.5 2.5v-2.828zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ImagePanoramaIconLinetone.displayName = "ImagePanoramaIconLinetone";
export { ImagePanoramaIconLinetone };
