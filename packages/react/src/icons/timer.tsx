import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Timer = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12c0-2.968 1.204-5.657 3.148-7.602A.75.75 0 0 1 5.46 5.46 9.22 9.22 0 0 0 2.75 12a9.25 9.25 0 1 0 10-9.218V5.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          d="M6.52 6.52a.75.75 0 0 1 .938-.1l5.477 3.544c.317.204.92.578 1.17 1.24a2.25 2.25 0 0 1-2.9 2.9c-.663-.25-1.036-.853-1.24-1.17L6.42 7.459l-.062-.115a.75.75 0 0 1 .162-.823"
        />
      </svg>
    ))
);
Timer.displayName = "Timer";
export { Timer };
