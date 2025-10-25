import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyIconFilltone = memo(
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
          d="M12 1.5a5.5 5.5 0 0 1 2.5 10.398v2.395l1.76 1.76-.46.347-1.54 1.154L15.708 19 12 22.707l-2.5-2.5v-8.31A5.5 5.5 0 0 1 12 1.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
KeyIconFilltone.displayName = "KeyIconFilltone";
export { KeyIconFilltone };
