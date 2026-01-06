import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpRightIconFill = memo(
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
          d="M4.399 19.601C.2 15.403.2 8.597 4.399 4.4S15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0m3.358-3.358a1 1 0 0 0 1.415 0l5.364-5.364v4.657a1 1 0 1 0 2 0V8.464a1 1 0 0 0-1-1H8.464a1 1 0 1 0 0 2h4.657l-5.364 5.364a1 1 0 0 0 0 1.415"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ArrowCircleUpRightIconFill.displayName = "ArrowCircleUpRightIconFill";
export { ArrowCircleUpRightIconFill };
