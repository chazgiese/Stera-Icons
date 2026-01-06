import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownLeftIconFill = memo(
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
          d="M19.601 4.399c4.198 4.198 4.198 11.004 0 15.202S8.597 23.8 4.4 19.601.2 8.597 4.399 4.4 15.403.2 19.6 4.399m-3.358 3.358a1 1 0 0 0-1.415 0l-5.364 5.364V8.464a1 1 0 1 0-2 0v7.072a1 1 0 0 0 1 1h7.072a1 1 0 1 0 0-2h-4.657l5.364-5.364a1 1 0 0 0 0-1.415"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleDownLeftIconFill.displayName = "ArrowCircleDownLeftIconFill";
export { ArrowCircleDownLeftIconFill };
