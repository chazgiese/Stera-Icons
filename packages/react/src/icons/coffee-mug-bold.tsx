import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoffeeMugBold = memo(
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
          d="M11 2c1.999 0 3.846.23 5.225.624.682.195 1.307.446 1.785.769.442.299.99.823.99 1.607l-.002.026.001.007L18.934 7h.499a3 3 0 0 1 2.998 3.1l-.1 3a3 3 0 0 1-2.999 2.9h-.698l-.024.718a5 5 0 0 1-4.237 4.775l-.18.027c-2.116.326-4.27.326-6.386 0l-.18-.027a5 5 0 0 1-4.237-4.775L3 5.033v-.007L3 5c0-.784.548-1.308.99-1.607.478-.323 1.103-.574 1.785-.769C7.155 2.23 9.001 2 11 2m5.928 5.145a9 9 0 0 1-.703.231C14.845 7.77 12.999 8 11 8s-3.846-.23-5.225-.624a9 9 0 0 1-.704-.231l.318 9.506a3 3 0 0 0 2.542 2.865l.18.028a19 19 0 0 0 5.778 0l.18-.028a3 3 0 0 0 2.542-2.865zM18.7 14h.631a1 1 0 0 0 1-.967l.1-3a1 1 0 0 0-1-1.033h-.565zM11 4c-1.867 0-3.52.217-4.675.547-.52.148-.892.31-1.13.453.238.143.61.305 1.13.453C7.48 5.783 9.133 6 11 6s3.52-.217 4.675-.547c.519-.148.89-.31 1.13-.453-.24-.143-.611-.305-1.13-.453C14.52 4.217 12.867 4 11 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoffeeMugBold.displayName = "CoffeeMugBold";
export { CoffeeMugBold };
