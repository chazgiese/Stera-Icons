import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIcon = memo(
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
          d="M10.9 1.62a9.9 9.9 0 0 1 4.845-.132.75.75 0 0 1 .182 1.398c-3.314 1.722-5.147 5.715-4.141 9.633 1.004 3.912 4.49 6.396 8.166 6.16a.75.75 0 0 1 .562 1.293 10.2 10.2 0 0 1-4.25 2.407c-5.541 1.548-11.194-1.891-12.662-7.605C2.137 9.071 5.373 3.167 10.901 1.621m2.564 1.13a8.5 8.5 0 0 0-2.159.315c-4.694 1.313-7.524 6.373-6.25 11.336 1.272 4.952 6.126 7.842 10.806 6.533a8.6 8.6 0 0 0 2.055-.876c-3.557-.618-6.599-3.332-7.583-7.166-.985-3.834.35-7.761 3.131-10.141"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoonCrescentIcon.displayName = "MoonCrescentIcon";
export { MoonCrescentIcon };
