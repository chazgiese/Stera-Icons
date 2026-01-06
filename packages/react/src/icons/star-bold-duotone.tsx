import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarIconBoldDuotone = memo(
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
          d="M8.687 9.262a1.57 1.57 0 0 0 1.294-.939L12 3.655 11.999 1a1.56 1.56 0 0 0-1.438.945L8.248 7.293l-5.824.538c-1.364.126-1.93 1.826-.889 2.736l4.392 3.843-1.285 5.678c-.306 1.35 1.154 2.386 2.328 1.692L12 18.806v-2.07c-.207 0-.414.04-.608.122l-.19.096-4.388 2.594 1.12-4.95a1.56 1.56 0 0 0-.496-1.523L3.615 9.73z"
        />
        <path
          fill="currentColor"
          d="M15.314 9.262a1.57 1.57 0 0 1-1.295-.939L12 3.655 12.001 1c.57 0 1.166.316 1.438.945l2.313 5.348 5.824.538c1.364.126 1.93 1.826.889 2.736l-4.392 3.843 1.285 5.678c.306 1.35-1.154 2.386-2.328 1.692L12 18.806v-2.07c.207 0 .414.04.608.122l.19.096 4.388 2.594-1.12-4.95a1.56 1.56 0 0 1 .495-1.523l3.824-3.346z"
          opacity={0.4}
        />
      </svg>
    ))
);
StarIconBoldDuotone.displayName = "StarIconBoldDuotone";
export { StarIconBoldDuotone };
