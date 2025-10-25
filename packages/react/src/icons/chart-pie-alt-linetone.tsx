import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconLinetone = memo(
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
          d="M19.04 20.453a11 11 0 0 0 1.413-1.414l-1.421-1.421a9 9 0 0 1-1.414 1.414z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 1q.505 0 1 .045v2.01a9 9 0 0 0-2 0v-2.01Q11.495 1 12 1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.032 17.618a9 9 0 0 1-1.414 1.414l-6.311-6.311a1 1 0 0 1-.19-.25l-.01-.022-.006-.014A1 1 0 0 1 11 12V3.055a9 9 0 0 1 2 0v7.448l6.882-2.85c.32.58.579 1.198.766 1.847l-6.883 2.85z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.74 6.884q.465.88.766 1.847l-1.858.769a9 9 0 0 0-.766-1.847z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13 1.045a11 11 0 0 1 8.74 5.839l-1.858.769A9 9 0 0 0 13 3.055zM20.453 19.04l-1.421-1.422A8.96 8.96 0 0 0 21 12c0-.867-.123-1.706-.352-2.5l1.858-.77C22.827 9.765 23 10.863 23 12c0 2.678-.957 5.132-2.547 7.04"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 6.262 5.394 1.55 11 1.045v2.01a9.001 9.001 0 1 0 6.618 15.977l1.421 1.421A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
ChartPieAltIconLinetone.displayName = "ChartPieAltIconLinetone";
export { ChartPieAltIconLinetone };
