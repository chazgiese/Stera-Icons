import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EditSquareIconFill = memo(
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
          d="M15.818 1.819a4.5 4.5 0 0 1 6.365 6.364l-.001-.001L22 8.37V16a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h7.64l.169-.172zm4.95 1.414a2.5 2.5 0 0 0-3.536 0v-.001l-.454.467-7.552 7.747-.63 3.986 4.17-.455 7.518-7.711.475-.488.01-.009a2.5 2.5 0 0 0 0-3.536"
          clipRule="evenodd"
        />
      </svg>
    ))
);
EditSquareIconFill.displayName = "EditSquareIconFill";
export { EditSquareIconFill };
