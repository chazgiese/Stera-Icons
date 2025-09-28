import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PeaceFilled = memo(
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
          d="M11 22.952a10.95 10.95 0 0 1-6.04-2.5L11 14.414zM19.038 20.452a10.95 10.95 0 0 1-6.038 2.5v-8.538zM11 11.586l-7.453 7.452A10.96 10.96 0 0 1 1 12C1 6.262 5.394 1.552 11 1.047zM13 1.047C18.606 1.552 23 6.262 23 12c0 2.678-.958 5.13-2.548 7.038L13 11.586z"
        />
      </svg>
    ))
);
PeaceFilled.displayName = "PeaceFilled";
export { PeaceFilled };
