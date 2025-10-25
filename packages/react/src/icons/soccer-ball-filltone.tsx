import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconFilltone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1.25c1.552 0 3.025.331 4.357.923l-3.494 2.184v3.157l3.36 2.88 2.922-.949 1.087-4.355a10.7 10.7 0 0 1 2.403 8.477L19.68 11.09l-3.006.976-1.382 3.224 1.8 2.479 4.157-.291a10.76 10.76 0 0 1-7.067 5.05l1.512-3.743-1.829-2.518h-3.732L8.306 18.78l1.512 3.746a10.76 10.76 0 0 1-7.069-5.052l4.158.29 1.799-2.477-1.38-3.223-3.006-.976-2.955 2.478A10.705 10.705 0 0 1 3.766 5.09l1.088 4.356 2.92.95 3.362-2.881V4.357L7.642 2.173A10.7 10.7 0 0 1 12 1.25"
        />
      </svg>
    ))
);
SoccerBallIconFilltone.displayName = "SoccerBallIconFilltone";
export { SoccerBallIconFilltone };
