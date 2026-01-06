import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconFill = memo(
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
          d="M14.293 14.293a1 1 0 0 1 1.414 0L18 16.586l2.293-2.293A1 1 0 0 1 22 15v6q-.001.084-.016.165a.991.991 0 0 1-.105.31 1 1 0 0 1-.587.481l-.062.016-.034.008-.031.004A1 1 0 0 1 21 22h-6a1 1 0 0 1-.707-1.707L16.586 18l-2.293-2.293a1 1 0 0 1 0-1.414M9 2a1 1 0 0 1 .707 1.707L7.414 6l2.293 2.293a1 1 0 1 1-1.414 1.414L6 7.414 3.707 9.707A1 1 0 0 1 2 9V3a1 1 0 0 1 .03-.24l.013-.053a1 1 0 0 1 .122-.257c.09-.137.214-.251.36-.33q.023-.013.048-.023a1 1 0 0 1 .134-.054l.062-.016.034-.007.006-.001.088-.014Q2.947 1.999 3 2z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconFill.displayName = "ExpandSimpleAltIconFill";
export { ExpandSimpleAltIconFill };
