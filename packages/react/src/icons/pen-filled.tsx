import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconFilled = memo(
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
          d="m18.499 11.413-9.792 9.793c-.144.144-.329.241-.529.277l-5.5 1a1 1 0 0 1-1.162-1.162l1-5.5.038-.147c.05-.143.13-.274.238-.382l9.792-9.793zM18.25 1.621c1.053 0 2.154.37 2.956 1.172.803.802 1.172 1.904 1.172 2.957s-.37 2.155-1.172 2.957l-1.293 1.292-5.914-5.914 1.293-1.292c.803-.802 1.904-1.172 2.958-1.172"
        />
      </svg>
    ))
);
PenIconFilled.displayName = "PenIconFilled";
export { PenIconFilled };
