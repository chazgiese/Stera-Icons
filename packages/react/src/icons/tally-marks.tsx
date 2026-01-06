import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TallyMarksIcon = memo(
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
          d="M6 3.25a.75.75 0 0 0-.75.75v11.174l-3.636 2.182a.75.75 0 0 0 .77 1.287l2.866-1.72V20a.75.75 0 0 0 1.5 0v-3.977l2.5-1.5V20a.75.75 0 0 0 1.5 0v-6.376l2.5-1.5V20a.75.75 0 1 0 1.5 0v-8.776l2.5-1.5V20a.75.75 0 1 0 1.5 0V8.825l3.636-2.181a.75.75 0 0 0-.772-1.287L18.75 7.075V4a.75.75 0 0 0-1.5 0v3.976l-2.5 1.499V4a.75.75 0 0 0-1.5 0v6.375l-2.5 1.5V4a.75.75 0 0 0-1.5 0v8.774l-2.5 1.5V4A.75.75 0 0 0 6 3.25"
        />
      </svg>
    ))
);
TallyMarksIcon.displayName = "TallyMarksIcon";
export { TallyMarksIcon };
