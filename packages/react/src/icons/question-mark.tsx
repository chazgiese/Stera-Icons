import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkIcon = memo(
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
          d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.25c3.594 0 6.75 2.452 6.75 5.75 0 3.066-2.728 5.4-6 5.713V16a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75c3.033 0 5.25-2.025 5.25-4.25S15.033 3.75 12 3.75c-2.658 0-4.82 1.57-5.271 3.428a.75.75 0 0 1-1.458-.356C5.931 4.115 8.853 2.25 12 2.25"
        />
      </svg>
    ))
);
QuestionMarkIcon.displayName = "QuestionMarkIcon";
export { QuestionMarkIcon };
