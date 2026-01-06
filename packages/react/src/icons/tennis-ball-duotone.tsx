import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.07 4.901A10.7 10.7 0 0 1 8.75 12c0 2.721-1.014 5.204-2.68 7.098A9.3 9.3 0 0 1 5 18.042 9.2 9.2 0 0 0 7.25 12c0-2.31-.85-4.422-2.25-6.043q.492-.572 1.07-1.056M17.93 4.901A9.3 9.3 0 0 1 19 5.957 9.2 9.2 0 0 0 16.75 12c0 2.31.85 4.42 2.25 6.042q-.492.572-1.07 1.056A10.7 10.7 0 0 1 15.25 12c0-2.721 1.013-5.205 2.68-7.099" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconDuotone.displayName = "TennisBallIconDuotone";
export { TennisBallIconDuotone };
