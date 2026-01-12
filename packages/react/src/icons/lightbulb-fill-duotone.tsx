import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconFillDuotone = memo(
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
          d="M12 1.25a6.75 6.75 0 0 1 6.018 9.812 39 39 0 0 1-.677 1.25l-.114.205c-.265.478-.518.941-.74 1.407A10 10 0 0 0 16.045 15h-8.09a10 10 0 0 0-.442-1.076c-.222-.466-.475-.93-.74-1.407l-.114-.205c-.228-.409-.462-.83-.677-1.25A6.75 6.75 0 0 1 12 1.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.045 15a5.2 5.2 0 0 0-.295 1.658V19c0 1.308-.914 2.4-2.137 2.679a1.75 1.75 0 0 1-3.226 0A2.75 2.75 0 0 1 8.25 19v-2.342c0-.555-.109-1.103-.295-1.658z"
        />
      </svg>
    ))
);
LightbulbIconFillDuotone.displayName = "LightbulbIconFillDuotone";
export { LightbulbIconFillDuotone };
