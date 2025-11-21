import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIconFilled = memo(
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
          d="M12 1a1 1 0 0 1 1 1v1.05c5.053.502 9 4.765 9 9.95a1 1 0 0 1-1.837.547C19.783 12.964 18.99 12.5 18 12.5c-.475 0-.753.107-.956.244-.226.152-.44.395-.707.803a1 1 0 0 1-1.674 0c-.135-.207-.476-.48-1.028-.707a5 5 0 0 0-.635-.207V19.5a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.867q-.326.081-.635.207c-.552.227-.893.5-1.028.707a1 1 0 0 1-1.674 0c-.267-.408-.481-.65-.707-.803-.203-.137-.481-.244-.956-.244-.99 0-1.782.464-2.163 1.047A1 1 0 0 1 2 13c0-5.185 3.947-9.448 9-9.95V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
UmbrellaIconFilled.displayName = "UmbrellaIconFilled";
export { UmbrellaIconFilled };
