import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkCircleIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9c-1.748 0-3.544.996-3.97 2.674a1 1 0 0 0 1.94.492C10.1 8.653 10.846 8 12 8c1.324 0 2 .824 2 1.4 0 .466-.397 1.056-1.28 1.303-.8.223-1.72.946-1.72 2.097v.2a1 1 0 1 0 2 0v-.2a.2.2 0 0 1 .03-.04.5.5 0 0 1 .227-.13C14.716 12.223 16 11.032 16 9.4 16 7.326 13.99 6 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
QuestionMarkCircleIconFill.displayName = "QuestionMarkCircleIconFill";
export { QuestionMarkCircleIconFill };
