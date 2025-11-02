import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RobotIconFilled = memo(
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
          d="M12 2a1.5 1.5 0 0 1 1 2.615V6.25h2c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703h.75l.102.005A1 1 0 0 1 21.5 12v1l-.005.102A1 1 0 0 1 20.5 14h-.75v1c0 .688.001 1.249-.036 1.703-.038.463-.12.882-.319 1.273a3.25 3.25 0 0 1-1.42 1.42c-.39.199-.809.28-1.272.318q-.315.024-.703.03V21l-.005.102A1 1 0 0 1 15 22H9a1 1 0 0 1-1-1v-1.256a11 11 0 0 1-.703-.03c-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272C4.25 16.25 4.25 15.688 4.25 15v-1H3.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h.75c0-.688-.001-1.249.036-1.703.038-.463.12-.882.318-1.273a3.25 3.25 0 0 1 1.42-1.42c.391-.199.81-.28 1.273-.318C7.75 6.25 8.312 6.25 9 6.25h2V4.615A1.5 1.5 0 0 1 12 2m-2.5 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RobotIconFilled.displayName = "RobotIconFilled";
export { RobotIconFilled };
