import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Sparkle = memo(
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
          d="M12 1.25a.75.75 0 0 1 .718.531l1.09 3.585a7.25 7.25 0 0 0 4.826 4.825l3.585 1.091a.75.75 0 0 1 0 1.436l-3.585 1.09a7.25 7.25 0 0 0-4.825 4.826l-1.091 3.585a.75.75 0 0 1-1.436 0l-1.09-3.585a7.25 7.25 0 0 0-4.826-4.825l-3.585-1.091a.75.75 0 0 1 0-1.436l3.585-1.09a7.25 7.25 0 0 0 4.825-4.826l1.091-3.585.045-.113A.75.75 0 0 1 12 1.25m-.374 4.554a8.75 8.75 0 0 1-5.822 5.822L4.575 12l1.229.374a8.75 8.75 0 0 1 5.822 5.822L12 19.424l.374-1.228a8.75 8.75 0 0 1 5.822-5.822L19.424 12l-1.228-.374a8.75 8.75 0 0 1-5.822-5.822L12 4.575z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Sparkle.displayName = "Sparkle";
export { Sparkle };
