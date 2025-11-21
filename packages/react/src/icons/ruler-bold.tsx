import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulerIconBold = memo(
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
          d="M5.909 2.177a2.25 2.25 0 0 1 3.182 0L21.823 14.91a2.25 2.25 0 0 1 0 3.182l-3.732 3.733a2.25 2.25 0 0 1-3.183 0L2.177 9.09a2.25 2.25 0 0 1 0-3.181zm1.768 1.414a.25.25 0 0 0-.354 0L3.591 7.324a.25.25 0 0 0 0 .353l2.659 2.66 1.543-1.544a1 1 0 1 1 1.414 1.414L7.664 11.75l1.586 1.586 1.543-1.543a1 1 0 1 1 1.414 1.414l-1.543 1.543 1.586 1.586 1.543-1.543a1 1 0 1 1 1.414 1.414l-1.543 1.543 2.658 2.659a.25.25 0 0 0 .355 0l3.731-3.732a.25.25 0 0 0 0-.354z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulerIconBold.displayName = "RulerIconBold";
export { RulerIconBold };
