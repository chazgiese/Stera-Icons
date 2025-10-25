import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertOctagonIconFilltone = memo(
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
          d="M15.624 1c.597 0 1.17.237 1.592.66l5.125 5.124c.422.422.659.995.659 1.592v7.248c0 .597-.237 1.17-.66 1.592l-5.124 5.125c-.422.422-.995.659-1.592.659H8.376c-.597 0-1.17-.237-1.592-.66L1.66 17.217A2.25 2.25 0 0 1 1 15.624V8.376c0-.597.237-1.17.66-1.592L6.783 1.66C7.206 1.237 7.78 1 8.376 1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AlertOctagonIconFilltone.displayName = "AlertOctagonIconFilltone";
export { AlertOctagonIconFilltone };
