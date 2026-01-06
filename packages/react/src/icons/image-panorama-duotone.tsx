import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePanoramaIconDuotone = memo(
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
          d="M21.794 4.28a.75.75 0 0 1 .956.72v14a.75.75 0 0 1-.956.721c-6.865-1.962-12.723-1.962-19.588 0a.75.75 0 0 1-.956-.72V5a.75.75 0 0 1 .956-.721c6.865 1.96 12.723 1.96 19.588 0m-.544 1.702c-6.416 1.688-12.084 1.688-18.5 0v12.036c6.416-1.689 12.084-1.689 18.5 0z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.263 10.177a1.75 1.75 0 0 1 2.474 0l3.586 3.586a.25.25 0 0 0 .354 0l1.586-1.586a1.75 1.75 0 0 1 2.474 0l5.615 5.615a40 40 0 0 0-2.671-.55l-4.004-4.005a.25.25 0 0 0-.354 0l-1.586 1.586a1.75 1.75 0 0 1-2.474 0l-3.586-3.586a.25.25 0 0 0-.354 0L2.75 13.81v-2.12zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ImagePanoramaIconDuotone.displayName = "ImagePanoramaIconDuotone";
export { ImagePanoramaIconDuotone };
