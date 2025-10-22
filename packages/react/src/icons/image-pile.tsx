import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIcon = memo(
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
          d="M11.917 9.599a1.834 1.834 0 1 1 .446 3.64 1.834 1.834 0 0 1-.446-3.64"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.438 4.807a3.75 3.75 0 0 1 4.178-3.265l8.603 1.056a3.75 3.75 0 0 1 3.264 4.18l-1.055 8.6a3.75 3.75 0 0 1-2.888 3.2 3.75 3.75 0 0 1-3.184 2.827l-8.603 1.057a3.75 3.75 0 0 1-4.179-3.265l-1.056-8.602a3.75 3.75 0 0 1 3.265-4.18l1.479-.182zm1.844 11.53a1.306 1.306 0 0 0-1.833.227l-2.278 2.913a2.25 2.25 0 0 0 2.4 1.496l6.605-.812zm5.286-9.49L4.966 7.905a2.25 2.25 0 0 0-1.96 2.507l.862 7.018 1.4-1.79a2.806 2.806 0 0 1 3.937-.484l6.07 4.743a2.25 2.25 0 0 0 1.857-2.489l-1.057-8.602a2.25 2.25 0 0 0-2.507-1.96M10.434 3.03a2.25 2.25 0 0 0-2.507 1.96l-.131 1.055 5.59-.686a3.75 3.75 0 0 1 4.179 3.265l1.027 8.364a2.25 2.25 0 0 0 1.347-1.792l1.056-8.601a2.25 2.25 0 0 0-1.959-2.508z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIcon.displayName = "ImagePileIcon";
export { ImagePileIcon };
