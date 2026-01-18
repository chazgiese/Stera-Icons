import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkCircleIconBold = memo(
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
          d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6c1.99 0 4 1.326 4 3.4 0 1.632-1.284 2.823-2.743 3.23a.5.5 0 0 0-.228.13.2.2 0 0 0-.029.04v.2a1 1 0 1 1-2 0v-.2c0-1.151.92-1.874 1.72-2.097.883-.246 1.28-.837 1.28-1.303 0-.576-.676-1.4-2-1.4-1.154 0-1.9.653-2.03 1.166a1 1 0 0 1-1.94-.492C8.456 6.996 10.252 6 12 6"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
QuestionMarkCircleIconBold.displayName = "QuestionMarkCircleIconBold";
export { QuestionMarkCircleIconBold };
