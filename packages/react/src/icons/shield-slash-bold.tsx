import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIconBold = memo(
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
          d="M4 7.957a1 1 0 0 1 1 1v1.627l.007.389a11 11 0 0 0 6.074 9.449l.919.459.919-.46a11 11 0 0 0 1.694-1.047 1 1 0 0 1 1.202 1.599c-.621.467-1.29.883-2.002 1.238l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684a13 13 0 0 1-7.178-11.167L3 10.584V8.957a1 1 0 0 1 1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M11.734 1.036c.203-.056.42-.047.617.027l8 3A1 1 0 0 1 21 5v5.584c0 1.435-.236 2.835-.68 4.152a1 1 0 0 1-1.896-.638A11 11 0 0 0 19 10.584v-4.89l-7-2.626-3.322 1.246a1.001 1.001 0 0 1-.703-1.873l3.673-1.378z"
        />
      </svg>
    ))
);
ShieldSlashIconBold.displayName = "ShieldSlashIconBold";
export { ShieldSlashIconBold };
