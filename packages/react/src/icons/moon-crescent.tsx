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
          d="M10.9 1.621a9.9 9.9 0 0 1 4.845-.132.75.75 0 0 1 .182 1.397c-3.314 1.722-5.147 5.716-4.141 9.634 1.004 3.912 4.49 6.395 8.166 6.159a.75.75 0 0 1 .562 1.294 10.2 10.2 0 0 1-4.25 2.406c-5.541 1.549-11.195-1.89-12.662-7.604C2.137 9.07 5.373 3.167 10.901 1.62m2.564 1.13a8.5 8.5 0 0 0-2.159.315c-4.694 1.312-7.524 6.373-6.25 11.336 1.272 4.952 6.126 7.841 10.806 6.533a8.6 8.6 0 0 0 2.054-.876c-3.556-.619-6.598-3.333-7.583-7.166-.984-3.835.351-7.762 3.132-10.142"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoonCrescentIcon.displayName = "MoonCrescentIcon";
export { MoonCrescentIcon };
