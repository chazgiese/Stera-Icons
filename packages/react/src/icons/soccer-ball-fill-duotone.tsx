import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIconFillDuotone = memo(
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
          d="M12 1.25c1.552 0 3.025.331 4.357.923l-3.494 2.184v3.157l3.36 2.88 2.922-.949 1.087-4.355a10.7 10.7 0 0 1 2.403 8.477L19.68 11.09l-3.006.976-1.382 3.224 1.8 2.479 4.157-.291a10.76 10.76 0 0 1-7.067 5.05l1.512-3.743-1.829-2.518h-3.732L8.306 18.78l1.512 3.746a10.76 10.76 0 0 1-7.069-5.052l4.158.29 1.799-2.477-1.38-3.223-3.006-.976-2.955 2.478A10.705 10.705 0 0 1 3.766 5.09l1.088 4.356 2.92.95 3.362-2.881V4.357L7.642 2.173A10.7 10.7 0 0 1 12 1.25"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="m13.865 16.266 1.83 2.518-1.513 3.743.026-.006a10.8 10.8 0 0 1-4.417 0l.027.006-1.512-3.746 1.827-2.515zM19.155 20.019a10.8 10.8 0 0 0 2.094-2.542l-4.156.29-1.801-2.478 1.382-3.224 3.006-.976 2.955 2.478a10.73 10.73 0 0 1-3.48 6.452M7.325 12.065l1.381 3.223-1.799 2.477-4.158-.29a10.7 10.7 0 0 1-1.384-3.908L4.32 11.09zM11.136 4.357v3.157l-3.362 2.88-2.92-.949L3.767 5.09a10.8 10.8 0 0 1 3.875-2.917zM20.232 5.09l-1.087 4.355-2.921.95-3.36-2.881V4.357l3.492-2.184a10.8 10.8 0 0 1 3.876 2.917" />
        </g>
      </svg>
    ))
);
SoccerBallIconFillDuotone.displayName = "SoccerBallIconFillDuotone";
export { SoccerBallIconFillDuotone };
