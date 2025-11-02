import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WrenchIconFilltone = memo(
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
          d="M14.842 4.004 12.45 6.396c-.245.245-.346.6-.267.938l.716 3.024a1 1 0 0 0 .743.743l3.025.716c.337.08.692-.022.937-.267l2.392-2.392a5.349 5.349 0 0 1-7.206 5.203 1 1 0 0 0-.945.136l-.11.094-4.928 4.928a1.646 1.646 0 0 1-2.326-2.326l4.928-4.928a1 1 0 0 0 .23-1.054 5.35 5.35 0 0 1 5.203-7.207"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.458 4.152a7.34 7.34 0 0 1 6.839-1.966c1.255.287 1.436 1.756.691 2.5l-2.73 2.728.445 1.882 1.882.445 2.729-2.729c.721-.722 2.122-.574 2.47.576l.03.115.088.449a7.343 7.343 0 0 1-9.183 8.282l-4.497 4.499a3.645 3.645 0 0 1-5.155-5.154l4.498-4.5a7.34 7.34 0 0 1 1.893-7.127m5.384-.149A5.348 5.348 0 0 0 9.64 11.21a1 1 0 0 1-.23 1.055L4.48 17.193a1.645 1.645 0 0 0 2.327 2.326l4.927-4.928.11-.095a1 1 0 0 1 .945-.135 5.348 5.348 0 0 0 7.206-5.204l-2.391 2.393c-.246.245-.6.346-.938.267l-3.024-.716a1 1 0 0 1-.744-.743l-.715-3.025c-.08-.337.021-.692.266-.937z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WrenchIconFilltone.displayName = "WrenchIconFilltone";
export { WrenchIconFilltone };
