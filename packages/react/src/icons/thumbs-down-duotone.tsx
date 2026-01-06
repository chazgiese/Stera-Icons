import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsDownIconDuotone = memo(
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
          d="M11.5 2.25a.75.75 0 0 0 0 1.5A3.25 3.25 0 0 0 8.25 7v6.441a4 4 0 0 0-.642-.147.75.75 0 0 0-.216 1.484A3 3 0 0 0 7 14.75 3.75 3.75 0 0 1 3.25 11V7A4.75 4.75 0 0 1 8 2.25zM8 3.75A3.25 3.25 0 0 0 4.75 7v4l.012.23a2.25 2.25 0 0 0 1.988 2.004V7c0-1.258.49-2.4 1.288-3.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.709 2.25a3.75 3.75 0 0 1 3.61 2.742l.002.003.002.008.01.03.035.115.126.423c.106.356.25.847.404 1.383.304 1.062.653 2.343.804 3.112l.14.79c.044.275.087.558.126.834.233 1.644-1.065 3.06-2.69 3.06h-2.164c.37 1.106.6 2.451.465 3.663-.094.832-.369 1.674-.967 2.316-.616.66-1.495 1.021-2.612 1.021a.75.75 0 0 1-.652-.378l-3.007-5.264a2.7 2.7 0 0 0-1.95-1.33.75.75 0 0 1 .217-1.484 4.2 4.2 0 0 1 3.035 2.07l2.776 4.857c.527-.07.866-.27 1.096-.516.304-.326.5-.818.573-1.459.145-1.299-.256-2.904-.76-3.911A.75.75 0 0 1 15 13.25h3.277c.75 0 1.305-.644 1.205-1.35-.076-.54-.162-1.09-.252-1.546-.136-.696-.468-1.916-.774-2.987a135 135 0 0 0-.524-1.785l-.035-.114-.008-.03-.003-.006v-.003l-.007-.02a2.25 2.25 0 0 0-2.17-1.659h-4.21a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ThumbsDownIconDuotone.displayName = "ThumbsDownIconDuotone";
export { ThumbsDownIconDuotone };
