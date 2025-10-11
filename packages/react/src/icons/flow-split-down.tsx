import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitDownIcon = memo(
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
          d="M12 1.25a3.75 3.75 0 0 1 .75 7.425v2.575H17A2.75 2.75 0 0 1 19.75 14v1.324A3.752 3.752 0 0 1 19 22.75a3.75 3.75 0 0 1-.75-7.426V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.324A3.752 3.752 0 0 1 5 22.75a3.75 3.75 0 0 1-.75-7.426V14A2.75 2.75 0 0 1 7 11.25h4.25V8.675A3.751 3.751 0 0 1 12 1.25m-7 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-7-14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitDownIcon.displayName = "FlowSplitDownIcon";
export { FlowSplitDownIcon };
