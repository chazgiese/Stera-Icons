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
          d="M11.917 9.6a1.833 1.833 0 1 1 .447 3.638 1.833 1.833 0 0 1-.447-3.639"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.559 5.091a4 4 0 0 1 4.254 3.503l1.056 8.602a4 4 0 0 1-3.483 4.458L6.783 22.71a4 4 0 0 1-4.427-3.28l-.03-.203-1.056-8.603a4 4 0 0 1 3.482-4.457l8.603-1.056zm-5.43 11.445a1.055 1.055 0 0 0-1.482.181L4.455 19.52a2 2 0 0 0 2.085 1.205l6.006-.738zm5.47-9.44L4.996 8.153a2 2 0 0 0-1.741 2.228l.788 6.418 1.027-1.314a3.056 3.056 0 0 1 4.29-.526l5.982 4.674a2 2 0 0 0 1.542-2.193l-1.057-8.603a2 2 0 0 0-2.024-1.755z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6.19 4.776a4 4 0 0 1 4.458-3.482l8.601 1.056a4 4 0 0 1 3.482 4.458l-1.055 8.602a4 4 0 0 1-4.014 3.512l.024-2a2 2 0 0 0 2.004-1.756l1.057-8.602a2 2 0 0 0-1.742-2.229l-8.602-1.056a2 2 0 0 0-2.228 1.742l-.259 2.101-1.984-.244z"
          opacity={0.4}
        />
      </svg>
    ))
);
ImagePileIconLinetone.displayName = "ImagePileIconLinetone";
export { ImagePileIconLinetone };
