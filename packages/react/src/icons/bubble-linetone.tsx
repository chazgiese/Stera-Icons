import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.751 4.604a1.35 1.35 0 0 1 1.11.208c.325.23.547.604.618 1.024.07.419-.02.845-.25 1.169-.231.323-.585.52-.982.558a5 5 0 0 0-.277.03c-1.668.214-3.265 1.502-3.816 3.276q-.048.147-.085.297a1.01 1.01 0 0 1-.43.598 1 1 0 0 1-.71.159 1 1 0 0 1-.622-.382 1 1 0 0 1-.211-.705q.024-.216.06-.431C5.58 7.817 7.61 5.48 10.303 4.719q.222-.064.45-.115"
        />
      </svg>
    ))
);
BubbleIconLinetone.displayName = "BubbleIconLinetone";
export { BubbleIconLinetone };
