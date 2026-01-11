import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ForkKnifeIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M19.25 3.981c-1.604.505-2.616 1.25-3.29 2.543-.793 1.519-1.171 3.88-1.207 7.726h1.497v1.5H14a.75.75 0 0 1-.75-.75c-.008-4.296.351-7.198 1.38-9.17 1.075-2.06 2.819-3.002 5.198-3.56a.752.752 0 0 1 .922.73v11.25h-1.5zM10.69 9.296l-1.177 2.745c-.174.405-.263.84-.263 1.28v6.18a2.25 2.25 0 0 1-4.5 0v-6.18c0-.44-.09-.875-.263-1.28L3.311 9.296c.114.267.38.454.689.454h1.138l.728 1.7a4.75 4.75 0 0 1 .384 1.871v6.18a.75.75 0 0 0 1.5 0v-6.18c0-.643.13-1.28.384-1.87l.728-1.7H10a.75.75 0 0 0 .69-.455" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.75 19.5a2.25 2.25 0 0 1-4.5 0v-5.25h4.5zm-3 0a.75.75 0 0 0 1.5 0v-3.75h-1.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H4A.75.75 0 0 1 3.25 9V3a.75.75 0 0 1 1.5 0v5.25h1.5V3.5a.75.75 0 0 1 1.5 0v4.75h1.5V3a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ForkKnifeIconDuotone.displayName = "ForkKnifeIconDuotone";
export { ForkKnifeIconDuotone };
