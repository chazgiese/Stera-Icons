import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.752 4.604a1.35 1.35 0 0 1 1.11.208c.324.23.547.604.617 1.023.07.42-.019.846-.25 1.17-.23.323-.585.519-.981.558a5 5 0 0 0-.277.03c-1.669.214-3.265 1.502-3.817 3.275a5 5 0 0 0-.085.297 1.01 1.01 0 0 1-.43.599 1 1 0 0 1-.71.158 1 1 0 0 1-.622-.382 1 1 0 0 1-.21-.705q.023-.216.06-.43C5.58 7.817 7.61 5.48 10.303 4.719q.222-.064.449-.115"
        />
      </svg>
    ))
);
BubbleIconFilltone.displayName = "BubbleIconFilltone";
export { BubbleIconFilltone };
