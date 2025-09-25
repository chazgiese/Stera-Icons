import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerField = memo(
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
          d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zm-7.25 5.588a3.25 3.25 0 0 1 0 6.323v4.089H20c.69 0 1.25-.56 1.25-1.25v-2.25H18.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h2.75V6c0-.69-.56-1.25-1.25-1.25h-7.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v2.25H5.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2.75V18c0 .69.56 1.25 1.25 1.25h7.25v-4.089a3.25 3.25 0 0 1 0-6.323V4.75zm-1.25 9.5h2v-4.5h-2zm16.5 0h2v-4.5h-2zm-7.25-4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerField.displayName = "SoccerField";
export { SoccerField };
