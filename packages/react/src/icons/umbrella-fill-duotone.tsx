import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIconFillDuotone = memo(
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
          d="M12 3c5.523 0 10 4.477 10 10a1 1 0 0 1-1.837.547C19.783 12.964 18.99 12.5 18 12.5c-.475 0-.753.107-.956.244-.226.152-.44.395-.707.803a1 1 0 0 1-1.674 0c-.135-.207-.476-.48-1.028-.707A4.5 4.5 0 0 0 12 12.5c-.504 0-1.104.122-1.635.34-.552.227-.893.5-1.028.707a1 1 0 0 1-1.674 0c-.267-.408-.481-.65-.707-.803-.203-.137-.481-.244-.956-.244-.99 0-1.782.464-2.163 1.047A1 1 0 0 1 2 13C2 7.477 6.477 3 12 3"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 12.5c.31 0 .656.047 1 .133V19.5a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.867c.344-.086.69-.133 1-.133M12 1a1 1 0 0 1 1 1v1.05a10 10 0 0 0-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
UmbrellaIconFillDuotone.displayName = "UmbrellaIconFillDuotone";
export { UmbrellaIconFillDuotone };
