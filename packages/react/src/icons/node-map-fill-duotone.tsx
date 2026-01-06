import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NodeMapIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.268 13.24a3 3 0 0 0 .942 1.166L6.981 17.01a3 3 0 0 0-.943-1.167zM16.508 14.807a3 3 0 0 0-.965 1.148l-1.802-1.514q.31-.221.556-.511.244-.29.41-.637zM16.255 9.894q.018.387.129.745c.075.244.183.474.315.687l-1.705.53a3 3 0 0 0-.128-.745 3 3 0 0 0-.316-.688zM10.943 9.193a3 3 0 0 0-1.228.863l-1.407-2q.36-.135.67-.353a3 3 0 0 0 .556-.512z" />
        </g>
        <path
          fill="currentColor"
          d="M4.25 15.25a2.996 2.996 0 0 1 3 3 3 3 0 1 1-3-3M18.25 14.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 9a3 3 0 0 1 3 3 2.996 2.996 0 0 1-3 3 2.996 2.996 0 0 1-3-3 2.997 2.997 0 0 1 3-3M19.25 6.75a3 3 0 1 1 0 6 3 3 0 0 1 0-6M7.25 2.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
        />
      </svg>
    ))
);
NodeMapIconFillDuotone.displayName = "NodeMapIconFillDuotone";
export { NodeMapIconFillDuotone };
