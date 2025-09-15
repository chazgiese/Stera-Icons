import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellOffFilled = memo(
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
          d="M16.546 20.081A5 5 0 0 1 7.101 19H3.65c-1.944 0-3.144-2.12-2.144-3.786l.497-.828A7 7 0 0 0 3 10.784V10c0-.76.095-1.497.273-2.201.09-.357.53-.46.792-.2zM9.174 19c.412 1.165 1.52 2 2.826 2a3 3 0 0 0 2.826-2z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M12 1a9 9 0 0 1 9 9v.784a7 7 0 0 0 .997 3.602l.497.828a2.485 2.485 0 0 1-.217 2.879c-.165.2-.464.185-.647.001L6.85 3.314a.477.477 0 0 1 .056-.732A8.95 8.95 0 0 1 12 1"
        />
      </svg>
    ))
);
BellOffFilled.displayName = "BellOffFilled";
export { BellOffFilled };
