import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconFilltone = memo(
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
          d="M12.565.514a11.5 11.5 0 0 1 7.565 3.352 1.5 1.5 0 0 0-2.12 2.123 8.5 8.5 0 0 0-9.263-1.842A8.5 8.5 0 0 0 5.99 5.99 1.5 1.5 0 0 0 3.87 3.866 11.5 11.5 0 0 1 11.435.514L12 .5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.01 3.868a1.5 1.5 0 0 1 2.122 0A11.502 11.502 0 0 1 12 23.5 11.501 11.501 0 0 1 3.868 3.868 1.5 1.5 0 0 1 5.99 5.99 8.502 8.502 0 0 0 12 20.5a8.502 8.502 0 0 0 8.338-10.158A8.5 8.5 0 0 0 18.01 5.99a1.5 1.5 0 0 1 0-2.122"
        />
      </svg>
    ))
);
CircleNotchIconFilltone.displayName = "CircleNotchIconFilltone";
export { CircleNotchIconFilltone };
