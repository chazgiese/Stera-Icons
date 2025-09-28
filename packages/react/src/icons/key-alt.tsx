import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyAlt = memo(
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
          d="M19.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.75 12a5.75 5.75 0 0 1-10.798 2.75H9.81l-1.28 1.28a.75.75 0 0 1-1.13-.08l-.981-1.308-.889.889a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.061l2-2A.75.75 0 0 1 4 9.25h7.952A5.75 5.75 0 0 1 22.75 12m-1.5 0a4.25 4.25 0 0 0-8.146-1.7.75.75 0 0 1-.688.45H4.31L3.06 12 5 13.94l.97-.97a.75.75 0 0 1 1.13.08l.981 1.309.889-.889a.75.75 0 0 1 .53-.22h2.916a.75.75 0 0 1 .688.45A4.251 4.251 0 0 0 21.25 12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyAlt.displayName = "KeyAlt";
export { KeyAlt };
