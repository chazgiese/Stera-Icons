import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconDuotone = memo(
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
          d="M13.385 5.36a3.75 3.75 0 0 1 4.179 3.264l1.056 8.603q.045.379.017.747a3.75 3.75 0 0 1-3.283 3.431l-8.601 1.057a3.75 3.75 0 0 1-4.18-3.266l-1.055-8.601a3.75 3.75 0 0 1 3.264-4.18zM8.282 16.337a1.306 1.306 0 0 0-1.833.226l-2.278 2.913a2.25 2.25 0 0 0 2.4 1.496l6.605-.812zm5.285-9.49L4.966 7.904a2.25 2.25 0 0 0-1.96 2.508l.861 7.018 1.4-1.791a2.806 2.806 0 0 1 3.938-.484l6.07 4.744a2.25 2.25 0 0 0 1.856-2.49l-1.056-8.601a2.25 2.25 0 0 0-2.508-1.96"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6.438 4.806a3.75 3.75 0 0 1 4.18-3.265l8.6 1.056a3.75 3.75 0 0 1 3.266 4.18l-1.056 8.6a3.75 3.75 0 0 1-2.89 3.2 3.7 3.7 0 0 0 .082-1.35l-.03-.238a2.25 2.25 0 0 0 1.35-1.794l1.055-8.601a2.25 2.25 0 0 0-1.959-2.508l-8.601-1.057a2.25 2.25 0 0 0-2.508 1.96l-.13 1.056-1.535.188z"
          opacity={0.4}
        />
      </svg>
    ))
);
ImagePileIconDuotone.displayName = "ImagePileIconDuotone";
export { ImagePileIconDuotone };
