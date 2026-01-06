import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchwayIconFillDuotone = memo(
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
          d="M12 1a9 9 0 0 1 9 9v9a4 4 0 0 1-4 4H7a4 4 0 0 1-3.995-3.794L3 19v-9a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7v9l.01.204A2 2 0 0 0 7 21h10a2 2 0 0 0 2-2v-9a7 7 0 0 0-7-7"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 3a7 7 0 0 1 7 7v9a2 2 0 0 1-2 2H7a2 2 0 0 1-1.99-1.796L5 19v-9a7 7 0 0 1 7-7"
          opacity={0.4}
        />
      </svg>
    ))
);
ArchwayIconFillDuotone.displayName = "ArchwayIconFillDuotone";
export { ArchwayIconFillDuotone };
