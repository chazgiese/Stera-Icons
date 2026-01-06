import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorNavigationIconBoldDuotone = memo(
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
          d="M12 1.545c.79 0 1.599.416 2.013 1.244l8.1 16.198c.985 1.97-1.156 4.037-3.09 2.982l-6.055-3.302a1 1 0 0 0-.478-.122H12v-2h.49c.501 0 .995.125 1.436.366l6.054 3.302c.071.039.121.04.156.034a.27.27 0 0 0 .137-.073.27.27 0 0 0 .079-.135.23.23 0 0 0-.029-.157l-8.1-16.198a.24.24 0 0 0-.092-.105.26.26 0 0 0-.131-.034z"
        />
        <path
          fill="currentColor"
          d="M12 3.545a.26.26 0 0 0-.132.034.24.24 0 0 0-.091.105l-8.1 16.198a.23.23 0 0 0-.028.157.27.27 0 0 0 .078.135.27.27 0 0 0 .137.073.24.24 0 0 0 .157-.034l6.053-3.302c.442-.24.935-.366 1.436-.366H12v2h-.49a1 1 0 0 0-.478.122l-6.054 3.302c-1.934 1.055-4.075-1.011-3.09-2.982l8.1-16.198A2.24 2.24 0 0 1 12 1.545z"
          opacity={0.4}
        />
      </svg>
    ))
);
CursorNavigationIconBoldDuotone.displayName = "CursorNavigationIconBoldDuotone";
export { CursorNavigationIconBoldDuotone };
