import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Bubble = memo(
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
        <g fill="currentColor" clipPath="url(#a)">
          <path d="M12 4.25a.75.75 0 0 1 0 1.5A6.25 6.25 0 0 0 5.75 12a.75.75 0 0 1-1.5 0A7.75 7.75 0 0 1 12 4.25" />
          <path
            fillRule="evenodd"
            d="M12 .25C18.49.25 23.75 5.51 23.75 12S18.49 23.75 12 23.75.25 18.49.25 12 5.51.25 12 .25m0 1.5C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ))
);
Bubble.displayName = "Bubble";
export { Bubble };
