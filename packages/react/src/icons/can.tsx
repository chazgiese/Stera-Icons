import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Can = memo(
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
          d="M17.5 2.25a.75.75 0 0 1 0 1.5h-.208l.568.994c.583 1.02.89 2.175.89 3.35v7.812c0 1.175-.307 2.33-.89 3.35l-.633 1.108a2.75 2.75 0 0 1-2.387 1.386H9.16a2.75 2.75 0 0 1-2.388-1.386l-.632-1.108a6.75 6.75 0 0 1-.89-3.35V8.094c0-1.175.307-2.33.89-3.35l.568-.994H6.5a.75.75 0 0 1 0-1.5zm-9.064 1.5L7.44 5.488a5.25 5.25 0 0 0-.691 2.606v7.812c0 .914.238 1.812.691 2.606l.634 1.108c.223.39.637.63 1.085.63h5.68c.448 0 .862-.24 1.085-.63l.634-1.108a5.25 5.25 0 0 0 .691-2.606V8.094c0-.914-.238-1.812-.691-2.606l-.995-1.738z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Can.displayName = "Can";
export { Can };
