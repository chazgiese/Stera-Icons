import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIcon = memo(
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
          d="M21.794 4.28a.75.75 0 0 1 .956.72v14a.75.75 0 0 1-.956.721c-6.865-1.961-12.723-1.961-19.588 0a.75.75 0 0 1-.956-.72V5a.75.75 0 0 1 .956-.721c6.865 1.961 12.723 1.961 19.588 0M5.677 11.238a.25.25 0 0 0-.354 0L2.75 13.81v4.207c5.202-1.37 9.913-1.63 14.929-.778l-4.002-4.002a.25.25 0 0 0-.354 0l-1.586 1.586a1.75 1.75 0 0 1-2.474 0zM21.25 5.982c-6.416 1.688-12.084 1.688-18.5 0v5.708l1.513-1.513a1.75 1.75 0 0 1 2.474 0l3.586 3.586a.25.25 0 0 0 .354 0l1.586-1.586a1.75 1.75 0 0 1 2.474 0l5.615 5.615q.447.108.898.226z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePanoramaIcon.displayName = "ImagePanoramaIcon";
export { ImagePanoramaIcon };
