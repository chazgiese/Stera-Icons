import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIconFill = memo(
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
          d="M16.324 20.566c-.76.635-1.6 1.19-2.51 1.645l-1.367.684a1 1 0 0 1-.894 0l-1.366-.684A13 13 0 0 1 3 10.584V7.242zM2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M11.735 1.036c.202-.056.418-.047.617.027l8 3A1 1 0 0 1 21 5v5.584c0 1.793-.371 3.53-1.053 5.12L7.034 2.793l4.614-1.73z"
        />
      </svg>
    ))
);
ShieldSlashIconFill.displayName = "ShieldSlashIconFill";
export { ShieldSlashIconFill };
