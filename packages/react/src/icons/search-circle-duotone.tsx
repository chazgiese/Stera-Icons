import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchCircleIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 6.25a4.75 4.75 0 0 1 3.99 7.325l2.217 2.218a1 1 0 1 1-1.414 1.414l-2.218-2.218A4.75 4.75 0 1 1 11 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5c.873 0 1.662-.347 2.246-.906a1 1 0 0 1 .098-.098c.56-.584.906-1.373.906-2.246A3.25 3.25 0 0 0 11 7.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchCircleIconDuotone.displayName = "SearchCircleIconDuotone";
export { SearchCircleIconDuotone };
