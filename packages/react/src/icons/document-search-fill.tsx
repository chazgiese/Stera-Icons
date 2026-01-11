import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentSearchIconFill = memo(
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
          d="M15 1.75c.688 0 1.249-.001 1.703.036.463.038.882.12 1.273.318a3.25 3.25 0 0 1 1.42 1.42c.199.391.28.81.318 1.273.037.454.036 1.015.036 1.703v7.693a5 5 0 1 0-7.056 7.057H9c-.688 0-1.249.001-1.703-.036-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272-.037-.454-.036-1.015-.036-1.703v-10c0-.688-.001-1.249.036-1.703.038-.463.12-.882.318-1.273a3.25 3.25 0 0 1 1.42-1.42c.391-.199.81-.28 1.273-.318C7.75 1.75 8.312 1.75 9 1.75zM9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0-3.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 13.75a3.75 3.75 0 0 1 3.262 5.598l1.445 1.445a1 1 0 1 1-1.414 1.414l-1.445-1.445A3.75 3.75 0 1 1 16 13.75m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentSearchIconFill.displayName = "DocumentSearchIconFill";
export { DocumentSearchIconFill };
