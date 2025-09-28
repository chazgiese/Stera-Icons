import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScissorsBold = memo(
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
          d="M20.305 5.856c.835-.266 1.74.11 2.14.89a.5.5 0 0 1-.195.66L7.905 15.69a3.501 3.501 0 0 1-6.436 2.561 3.5 3.5 0 0 1 5.436-4.293l1.706-.985 1.077-2.764a2.5 2.5 0 0 1 1.57-1.474zM5.799 15.75a1.5 1.5 0 1 0-2.599 1.5 1.5 1.5 0 0 0 2.599-1.5m5.701-5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.282 16.475a.5.5 0 0 1 .194.661c-.4.78-1.3 1.16-2.138.902L11.3 15.27a2.5 2.5 0 0 1-.393-.158l4.506-2.602z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.5 5.632a3.5 3.5 0 0 1 6.436 2.56l1.325.766q-.315.402-.506.887l-.36.922-1.46-.843A3.5 3.5 0 0 1 1.5 5.632m3.781.45a1.5 1.5 0 1 0-1.498 2.6 1.5 1.5 0 0 0 1.498-2.6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScissorsBold.displayName = "ScissorsBold";
export { ScissorsBold };
