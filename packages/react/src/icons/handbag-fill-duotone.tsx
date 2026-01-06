import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandbagIconFillDuotone = memo(
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
          d="M15.252 8c1.247 0 2.166-.019 2.955.312a4 4 0 0 1 1.652 1.29c.513.685.717 1.582 1.02 2.791l.6 2.4c.25.998.453 1.811.558 2.473.106.67.132 1.301-.058 1.915a4 4 0 0 1-1.749 2.24c-.549.332-1.167.46-1.843.52-.667.06-1.506.059-2.535.059H8.147c-1.029 0-1.867 0-2.535-.059-.675-.06-1.294-.188-1.843-.52a4 4 0 0 1-1.749-2.24c-.19-.614-.163-1.245-.057-1.915.104-.662.308-1.475.557-2.473l.6-2.4c.303-1.21.508-2.106 1.02-2.79a4 4 0 0 1 1.653-1.29C6.58 7.98 7.5 8 8.748 8z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a5 5 0 0 1 5 5v1.04c-.46-.041-.972-.04-1.558-.04H15V7a3 3 0 1 0-6 0v1h-.442C7.971 8 7.46 7.999 7 8.04V7a5 5 0 0 1 5-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandbagIconFillDuotone.displayName = "HandbagIconFillDuotone";
export { HandbagIconFillDuotone };
