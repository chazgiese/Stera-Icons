import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpLeftIcon = memo(
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
          d="M7.47 1.47a.75.75 0 1 1 1.06 1.06L4.81 6.25H18A3.75 3.75 0 0 1 21.75 10v11a.75.75 0 0 1-1.5 0V10A2.25 2.25 0 0 0 18 7.75H4.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1-.214-.626l.006-.034q.003-.02.01-.04a1 1 0 0 1 .027-.092l.018-.048a1 1 0 0 1 .059-.106l.094-.114z"
        />
      </svg>
    ))
);
ArrowCornerUpLeftIcon.displayName = "ArrowCornerUpLeftIcon";
export { ArrowCornerUpLeftIcon };
