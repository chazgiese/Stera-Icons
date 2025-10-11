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
          d="M12 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5c2.542 0 5 1.684 5 4.2 0 2.183-1.85 3.738-4 4.112V14a1 1 0 1 1-2 0v-1.6a1 1 0 0 1 1-1c1.877 0 3-1.181 3-2.2C15 8.182 13.877 7 12 7c-1.638 0-2.807.927-3.03 1.806a1 1 0 0 1-1.94-.492C7.55 6.272 9.768 5 12 5"
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
