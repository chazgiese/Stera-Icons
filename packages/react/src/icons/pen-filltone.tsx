import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconFilltone = memo(
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
          d="M18.25 1.621c1.053 0 2.155.37 2.957 1.172S22.38 4.697 22.38 5.75s-.37 2.155-1.172 2.957l-1.294 1.292L14 4.085l1.294-1.292c.803-.802 1.904-1.172 2.957-1.172"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="m18.5 11.413-9.793 9.793c-.143.144-.328.241-.528.277l-5.5 1a1 1 0 0 1-1.162-1.162l1-5.5.038-.147a1 1 0 0 1 .238-.382l9.792-9.793z"
        />
      </svg>
    ))
);
PenIconFilltone.displayName = "PenIconFilltone";
export { PenIconFilltone };
