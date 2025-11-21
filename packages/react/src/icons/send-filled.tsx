import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIconFilled = memo(
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
          d="M19.179 2.113c1.675-.558 3.267 1.036 2.71 2.711L16.65 20.535c-.663 1.99-3.496 1.94-4.089-.072l-1.73-5.882 5.876-5.874a1 1 0 0 0-1.414-1.414l-5.875 5.874-5.88-1.728c-2.013-.592-2.063-3.425-.072-4.089z"
        />
      </svg>
    ))
);
SendIconFilled.displayName = "SendIconFilled";
export { SendIconFilled };
