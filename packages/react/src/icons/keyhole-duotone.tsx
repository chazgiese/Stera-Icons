import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeIconDuotone = memo(
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
          d="M18.766 17.856c.665 1.33-.302 2.895-1.789 2.895H7.022c-1.486 0-2.453-1.565-1.789-2.895l2.429-4.858q.221.216.464.407a.75.75 0 0 0 1.135-.254l.001.001-2.687 5.375a.5.5 0 0 0 .447.724h9.955a.5.5 0 0 0 .447-.724l-2.687-5.375q.035.068.083.13a.75.75 0 0 0 1.054.123 6 6 0 0 0 .463-.407z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2.25a6.25 6.25 0 0 1 3.874 11.155.75.75 0 0 1-.93-1.176 4.75 4.75 0 1 0-5.887 0 .75.75 0 0 1-.931 1.176A6.25 6.25 0 0 1 12 2.25"
        />
      </svg>
    ))
);
KeyholeIconDuotone.displayName = "KeyholeIconDuotone";
export { KeyholeIconDuotone };
