import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleBold = memo(
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
          d="M10.752 4.604a1.35 1.35 0 0 1 1.11.208c.324.23.547.604.617 1.023.07.42-.019.845-.25 1.169a1.35 1.35 0 0 1-.981.559 5 5 0 0 0-.277.03c-1.669.214-3.265 1.501-3.817 3.275q-.047.147-.085.297a1.01 1.01 0 0 1-.43.599 1 1 0 0 1-.71.158 1 1 0 0 1-.621-.382 1 1 0 0 1-.211-.705q.022-.216.06-.43C5.58 7.815 7.61 5.48 10.303 4.718q.222-.065.449-.115"
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
BubbleBold.displayName = "BubbleBold";
export { BubbleBold };
