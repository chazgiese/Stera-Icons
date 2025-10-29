import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoffeeMugIconFilltone = memo(
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
          d="m18.999 5.033-.001.04-.388 11.645a5 5 0 0 1-4.237 4.775l-.18.027c-2.116.326-4.27.326-6.386 0l-.18-.027a5 5 0 0 1-4.237-4.775L3.002 5.072l-.001-.04c.015.766.553 1.28.99 1.575.477.323 1.102.574 1.784.769C7.155 7.77 9.001 8 11 8s3.846-.23 5.225-.624c.682-.195 1.307-.446 1.785-.769.436-.294.973-.809.988-1.575z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.433 7a3 3 0 0 1 2.998 3.1l-.1 3a3 3 0 0 1-2.999 2.9h-.698l.067-2h.631a1 1 0 0 0 1-.967l.1-3a1 1 0 0 0-1-1.033h-.565l.067-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 2c1.999 0 3.846.23 5.225.624.682.195 1.307.446 1.785.769.442.299.99.823.99 1.607s-.548 1.308-.99 1.607c-.478.323-1.103.574-1.785.769C14.845 7.77 12.999 8 11 8s-3.846-.23-5.225-.624c-.682-.195-1.307-.446-1.785-.769C3.548 6.308 3 5.784 3 5s.548-1.308.99-1.607c.478-.323 1.103-.574 1.785-.769C7.155 2.23 9.001 2 11 2m0 2c-1.867 0-3.52.217-4.675.547-.52.148-.892.31-1.13.453.238.143.61.305 1.13.453C7.48 5.783 9.133 6 11 6s3.52-.217 4.675-.547c.519-.148.89-.31 1.13-.453-.24-.143-.611-.305-1.13-.453C14.52 4.217 12.867 4 11 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoffeeMugIconFilltone.displayName = "CoffeeMugIconFilltone";
export { CoffeeMugIconFilltone };
