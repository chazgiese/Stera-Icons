import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIcon = memo(
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
          d="M12 3.25c1.258 0 2.317.846 2.644 2h4.777A1.748 1.748 0 0 1 22.75 6a1.75 1.75 0 0 1-3.33.75h-3.58c.97.776 1.842 1.806 2.565 2.981.993 1.614 1.738 3.542 2.1 5.567a2.75 2.75 0 1 1-1.5.14c-.336-1.796-1.003-3.501-1.877-4.92-.82-1.333-1.8-2.378-2.821-3.026a2.745 2.745 0 0 1-4.615.001c-1.02.648-1.999 1.693-2.819 3.025a14.7 14.7 0 0 0-1.879 4.92A2.749 2.749 0 1 1 1.25 18a2.75 2.75 0 0 1 2.244-2.702c.363-2.025 1.109-3.953 2.102-5.567.723-1.175 1.593-2.205 2.563-2.981H4.58A1.748 1.748 0 0 1 1.25 6a1.75 1.75 0 0 1 3.33-.75h4.776a2.75 2.75 0 0 1 2.644-2"
        />
      </svg>
    ))
);
CurveBezierIcon.displayName = "CurveBezierIcon";
export { CurveBezierIcon };
