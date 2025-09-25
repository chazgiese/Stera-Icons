import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoffeeMugFilled = memo(
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
          d="M11 2c1.999 0 3.846.23 5.225.624.682.195 1.307.446 1.785.769.442.299.99.823.99 1.607l-.002.032.001.001-.001.04L18.934 7h.499a3 3 0 0 1 2.998 3.1l-.1 3a3 3 0 0 1-2.999 2.9h-.698l-.024.718a5 5 0 0 1-4.237 4.775l-.18.027c-2.116.326-4.27.326-6.386 0l-.18-.027a5 5 0 0 1-4.237-4.775L3.002 5.072l-.001-.039L3 5c0-.784.548-1.308.99-1.607.478-.323 1.103-.574 1.785-.769C7.155 2.23 9.001 2 11 2m7.701 12h.631a1 1 0 0 0 1-.967l.1-3a1 1 0 0 0-1-1.033h-.565zM11 4c-1.867 0-3.52.217-4.675.547-.52.148-.892.31-1.13.453q.224.136.614.282.242.091.548.179.488.137 1.081.244.464.085.982.148A23.368 23.368 0 0 0 11 6a23 23 0 0 0 2.58-.147q.517-.063.98-.148.594-.107 1.082-.244.306-.089.55-.179.387-.146.613-.282c-.24-.143-.611-.305-1.13-.453C14.52 4.217 12.867 4 11 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoffeeMugFilled.displayName = "CoffeeMugFilled";
export { CoffeeMugFilled };
