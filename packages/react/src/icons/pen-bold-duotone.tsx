import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenIconBoldDuotone = memo(
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
          d="M18.25 1.621c1.053 0 2.155.37 2.957 1.172s1.172 1.904 1.172 2.957-.37 2.155-1.172 2.957L18.5 11.414 12.586 5.5l2.707-2.707c.802-.802 1.904-1.172 2.957-1.172m0 2c-.61 0-1.174.217-1.543.586L15.414 5.5 18.5 8.586l1.293-1.293c.37-.37.586-.932.586-1.543s-.217-1.174-.586-1.543c-.37-.37-.932-.586-1.543-.586"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.586 5.5 14 6.913l-9.572 9.572-.685 3.773 3.771-.687L17.085 10l1.415 1.415-9.793 9.792c-.143.144-.328.24-.528.277l-5.5 1a1 1 0 0 1-1.162-1.162l1-5.5.038-.147c.05-.143.13-.274.238-.382z"
        />
      </svg>
    ))
);
PenIconBoldDuotone.displayName = "PenIconBoldDuotone";
export { PenIconBoldDuotone };
