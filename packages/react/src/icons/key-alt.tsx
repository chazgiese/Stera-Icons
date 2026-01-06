import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyAltIcon = memo(
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
          d="M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 6.25a5.75 5.75 0 1 1-5.048 8.5H9.811l-1.28 1.28a.75.75 0 0 1-1.13-.08l-.982-1.308-.889.888a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06l2-2A.75.75 0 0 1 4 9.25h7.952a5.75 5.75 0 0 1 5.048-3m0 1.5a4.25 4.25 0 0 0-3.896 2.55.75.75 0 0 1-.688.45H4.311L3.06 12 5 13.94l.969-.97a.75.75 0 0 1 1.13.08l.981 1.308.889-.888a.75.75 0 0 1 .53-.22h2.916a.75.75 0 0 1 .688.45A4.251 4.251 0 0 0 21.25 12 4.25 4.25 0 0 0 17 7.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyAltIcon.displayName = "KeyAltIcon";
export { KeyAltIcon };
