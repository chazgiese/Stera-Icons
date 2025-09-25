import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Key = memo(
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
          d="M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25a5.75 5.75 0 0 1 2.75 10.798v2.142l1.28 1.28a.75.75 0 0 1-.08 1.13l-1.308.981.888.889a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1-.22-.53v-7.952A5.75 5.75 0 0 1 12 1.25m0 1.5a4.25 4.25 0 0 0-1.7 8.147c.273.119.45.389.45.687v8.105L12 20.94 13.94 19l-.97-.97a.75.75 0 0 1 .08-1.13l1.308-.981-.888-.889a.75.75 0 0 1-.22-.53v-2.916a.75.75 0 0 1 .45-.687A4.251 4.251 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Key.displayName = "Key";
export { Key };
