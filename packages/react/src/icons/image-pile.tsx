import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePile = memo(
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
          d="M13.386 5.36a3.75 3.75 0 0 1 4.179 3.265l1.055 8.602a3.75 3.75 0 0 1-3.265 4.18l-8.602 1.056a3.75 3.75 0 0 1-4.179-3.266l-1.056-8.601a3.75 3.75 0 0 1 3.265-4.18zM8.282 16.338a1.306 1.306 0 0 0-1.833.224l-2.278 2.915a2.25 2.25 0 0 0 2.4 1.497l6.606-.812zm5.286-9.49L4.966 7.906a2.25 2.25 0 0 0-1.96 2.507l.861 7.017 1.4-1.79a2.807 2.807 0 0 1 3.938-.484l6.072 4.744a2.25 2.25 0 0 0 1.855-2.489l-1.057-8.603a2.25 2.25 0 0 0-2.507-1.959"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7.456 3.133a4.42 4.42 0 0 1 4.24-1.973l7.279.894a4.417 4.417 0 0 1 3.844 4.921l-.893 7.28c-.06.48-.193.933-.39 1.35a.75.75 0 0 1-1.356-.641c.129-.274.218-.573.258-.892l.893-7.28a2.917 2.917 0 0 0-2.54-3.25l-7.278-.893a2.92 2.92 0 0 0-2.801 1.303.75.75 0 1 1-1.256-.82"
        />
      </svg>
    ))
);
ImagePile.displayName = "ImagePile";
export { ImagePile };
