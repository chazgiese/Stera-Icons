import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconBoldDuotone = memo(
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
          d="M10.752 4.604a1.35 1.35 0 0 1 1.11.208c.324.23.547.604.617 1.024.07.419-.019.845-.25 1.169-.23.323-.585.52-.981.558a5 5 0 0 0-.278.03c-1.668.214-3.264 1.502-3.816 3.276a5 5 0 0 0-.085.297 1.01 1.01 0 0 1-.43.598 1 1 0 0 1-.71.159 1 1 0 0 1-.622-.382 1 1 0 0 1-.21-.705q.022-.216.06-.431c.423-2.588 2.452-4.925 5.145-5.686q.223-.064.45-.115"
        />
      </svg>
    ))
);
BubbleIconBoldDuotone.displayName = "BubbleIconBoldDuotone";
export { BubbleIconBoldDuotone };
