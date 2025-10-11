import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BracketsSquareCircleIcon = memo(
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
          d="M9 6.75a.75.75 0 0 1 0 1.5h-.59a.16.16 0 0 0-.16.16v7.18c0 .089.071.16.16.16H9a.75.75 0 0 1 0 1.5h-.59a1.66 1.66 0 0 1-1.66-1.66V8.41c0-.917.743-1.66 1.66-1.66zM15.59 6.75c.917 0 1.66.743 1.66 1.66v7.18a1.66 1.66 0 0 1-1.66 1.66H15a.75.75 0 0 1 0-1.5h.59a.16.16 0 0 0 .16-.16V8.41a.16.16 0 0 0-.16-.16H15a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BracketsSquareCircleIcon.displayName = "BracketsSquareCircleIcon";
export { BracketsSquareCircleIcon };
