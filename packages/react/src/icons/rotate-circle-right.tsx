import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateCircleRightIcon = memo(
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
          d="M13.53 5.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H11.5a4.75 4.75 0 1 0 3.88 7.491.75.75 0 1 0-1.225-.866A3.25 3.25 0 1 1 11.5 9.75h2.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l2.93-2.93a.85.85 0 0 0 0-1.2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m0 1.5a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RotateCircleRightIcon.displayName = "RotateCircleRightIcon";
export { RotateCircleRightIcon };
