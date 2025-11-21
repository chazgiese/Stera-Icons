import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MailOpenIcon = memo(
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
          d="M9.664 2.783a3.95 3.95 0 0 1 4.672 0l5.8 4.253A3.95 3.95 0 0 1 21.743 10h.007v8A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-8h.007a3.95 3.95 0 0 1 1.607-2.964zm5.071 12.241a3.75 3.75 0 0 1-2.217.726h-1.37c-.829 0-1.635-.275-2.292-.781L3.75 11.026V18A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-7.02zM13.45 3.992a2.45 2.45 0 0 0-2.898 0l-5.8 4.254a2.45 2.45 0 0 0-.812 1.031l5.834 4.504a2.25 2.25 0 0 0 1.375.469h1.37c.478 0 .945-.153 1.33-.436l6.206-4.55c-.17-.4-.445-.754-.805-1.018z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MailOpenIcon.displayName = "MailOpenIcon";
export { MailOpenIcon };
