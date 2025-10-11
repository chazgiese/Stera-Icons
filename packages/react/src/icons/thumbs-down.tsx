import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsDownIcon = memo(
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
          d="M15.709 2.25a3.75 3.75 0 0 1 3.61 2.743l.002.002.002.008.01.03.035.115.126.423c.106.356.251.847.404 1.383.304 1.062.653 2.343.804 3.112.097.493.188 1.072.266 1.624.233 1.644-1.065 3.06-2.69 3.06h-2.164c.37 1.106.601 2.451.465 3.663-.093.832-.368 1.674-.967 2.316-.616.66-1.495 1.021-2.612 1.021a.75.75 0 0 1-.651-.378L9.34 16.108A2.7 2.7 0 0 0 7 14.75 3.75 3.75 0 0 1 3.25 11V7A4.75 4.75 0 0 1 8 2.25zM11.5 3.75A3.25 3.25 0 0 0 8.25 7v6.441c.998.312 1.86.99 2.394 1.923l2.775 4.858c.527-.07.867-.27 1.097-.517.304-.326.5-.818.572-1.459.146-1.299-.255-2.904-.759-3.911A.75.75 0 0 1 15 13.25h3.277c.75 0 1.306-.644 1.205-1.35-.076-.54-.162-1.09-.252-1.546-.136-.696-.468-1.916-.774-2.987a135 135 0 0 0-.524-1.785l-.034-.114-.01-.03-.002-.006v-.003l-.007-.02a2.25 2.25 0 0 0-2.17-1.659zm-3.5 0A3.25 3.25 0 0 0 4.75 7v4c0 1.158.875 2.11 2 2.234V7c0-1.258.49-2.4 1.288-3.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThumbsDownIcon.displayName = "ThumbsDownIcon";
export { ThumbsDownIcon };
