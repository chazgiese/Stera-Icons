import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WrenchIconLinetone = memo(
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
          d="M7.565 11.28q.086.316.2.625a1 1 0 0 0 1.651.35l-.007.01-4.928 4.927a1.645 1.645 0 0 0 2.327 2.327l4.927-4.928.02-.019a1 1 0 0 0 .339 1.663q.31.114.626.199l-4.498 4.499a3.645 3.645 0 0 1-5.155-5.155z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.458 4.151a7.34 7.34 0 0 1 6.84-1.965c1.254.287 1.435 1.756.69 2.5l-2.73 2.728.445 1.882 1.882.444 2.73-2.728.147-.13c.75-.569 1.997-.37 2.322.706l.03.115.088.448a7.348 7.348 0 0 1-9.808 8.084 1 1 0 0 1 .696-1.874 5.35 5.35 0 0 0 7.206-5.204l-2.392 2.393a1 1 0 0 1-.937.266l-3.025-.715a1 1 0 0 1-.743-.744l-.715-3.024a1 1 0 0 1 .266-.937l2.392-2.393A5.347 5.347 0 0 0 9.64 11.21a1 1 0 0 1-1.877.695 7.35 7.35 0 0 1 1.694-7.754"
        />
      </svg>
    ))
);
WrenchIconLinetone.displayName = "WrenchIconLinetone";
export { WrenchIconLinetone };
