import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HammerIconDuotone = memo(
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
          d="M9.25 9c0 .414.336.75.75.75h.719l-.365 8.783a1.648 1.648 0 1 0 3.293 0L13.28 9.75h1.22q.145-.001.278-.056l.367 8.777a3.149 3.149 0 1 1-6.291 0l.394-9.475z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.5 2.25c.199 0 .39.08.53.22l1.118 1.117 1.517-.758.08-.034A.8.8 0 0 1 18 2.75h2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.335-.08l-1.517-.758L15.03 9.53a.75.75 0 0 1-.53.22H10A.75.75 0 0 1 9.25 9c0-.215-.096-.41-.34-.584-.262-.186-.676-.328-1.197-.354-1.042-.053-2.297.37-3.127 1.407a.75.75 0 0 1-1.321-.616C4.327 3.544 7.602 2.25 9 2.25zM9 3.75c-.496 0-2.433.48-3.624 3.274.8-.355 1.645-.499 2.411-.46.729.036 1.44.237 1.991.63.372.264.672.621.836 1.056h3.576l1.28-1.28.09-.077a.75.75 0 0 1 .775-.064l1.842.921h1.073v-3.5h-1.073l-1.842.92a.75.75 0 0 1-.865-.14l-1.28-1.28z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HammerIconDuotone.displayName = "HammerIconDuotone";
export { HammerIconDuotone };
