import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconLinetone = memo(
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
          d="M6.19 4.776a4 4 0 0 1 4.458-3.482l8.601 1.056a4 4 0 0 1 3.482 4.458l-1.055 8.602a4 4 0 0 1-2.932 3.374 4 4 0 0 0 .125-1.589l-.074-.598c.477-.312.82-.822.895-1.431l1.057-8.603a2 2 0 0 0-1.742-2.228l-8.602-1.056A2 2 0 0 0 8.175 5.02l-.091.737-2.046.252z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.917 9.599a1.833 1.833 0 1 1 .447 3.64 1.833 1.833 0 0 1-.447-3.64"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.559 5.091a4 4 0 0 1 4.253 3.503l1.057 8.602a4 4 0 0 1-3.483 4.458L6.783 22.71a4 4 0 0 1-4.428-3.28l-.029-.203-1.057-8.603a4 4 0 0 1 3.483-4.457l8.602-1.056zM8.128 16.536a1.055 1.055 0 0 0-1.482.181L4.455 19.52a2 2 0 0 0 2.085 1.205l6.006-.738zm5.47-9.44L4.996 8.153a2 2 0 0 0-1.741 2.228l.788 6.418 1.027-1.314a3.056 3.056 0 0 1 4.29-.527l5.982 4.675a2 2 0 0 0 1.542-2.193l-1.057-8.603a2 2 0 0 0-2.024-1.756z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIconLinetone.displayName = "ImagePileIconLinetone";
export { ImagePileIconLinetone };
