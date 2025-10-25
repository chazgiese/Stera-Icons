import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIconFilltone = memo(
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
          d="M19.178 2.112c1.675-.558 3.268 1.036 2.71 2.71L16.65 20.535c-.663 1.99-3.496 1.94-4.088-.072l-2.05-6.974-6.974-2.05c-2.013-.592-2.063-3.425-.072-4.089z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.293 7.293a1 1 0 1 1 1.414 1.414l-5.875 5.874-.32-1.092-1.094-.322z"
        />
      </svg>
    ))
);
SendIconFilltone.displayName = "SendIconFilltone";
export { SendIconFilltone };
