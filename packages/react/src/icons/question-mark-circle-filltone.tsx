import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuestionMarkCircleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.001 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-11C9.769 5 7.55 6.272 7.031 8.314a1 1 0 0 0 1.94.492C9.194 7.927 10.363 7 12 7c1.876 0 3 1.182 3 2.2s-1.124 2.2-3 2.2a1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.688c2.15-.375 4-1.93 4-4.112 0-2.516-2.459-4.2-5-4.2"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 5c2.542 0 5 1.684 5 4.2 0 2.183-1.85 3.737-4 4.112V14a1 1 0 0 1-2 0v-1.6a1 1 0 0 1 1-1c1.877 0 3-1.182 3-2.2S13.878 7 12 7c-1.637 0-2.807.927-3.03 1.806a1.001 1.001 0 0 1-1.94-.492C7.55 6.272 9.769 5 12 5"
        />
      </svg>
    ))
);
QuestionMarkCircleIconFilltone.displayName = "QuestionMarkCircleIconFilltone";
export { QuestionMarkCircleIconFilltone };
