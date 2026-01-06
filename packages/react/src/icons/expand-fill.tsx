import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconFill = memo(
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
          d="M8.293 14.293a1 1 0 1 1 1.414 1.414L7.414 18l1.293 1.293A1 1 0 0 1 8 21H4q-.085-.001-.166-.016-.015-.001-.031-.005l-.034-.007-.062-.016a1 1 0 0 1-.257-.121 1 1 0 0 1-.33-.36l-.02-.042a1 1 0 0 1-.057-.141A1.003 1.003 0 0 1 3 20v-4a1 1 0 0 1 1.707-.707L6 16.586zM14.293 14.293a1 1 0 0 1 1.414 0L18 16.586l1.293-1.293A1 1 0 0 1 21 16v4q-.001.084-.016.165a.991.991 0 0 1-.105.31 1 1 0 0 1-.587.481l-.062.016-.034.008-.031.004A1 1 0 0 1 20 21h-4a1 1 0 0 1-.707-1.707L16.586 18l-2.293-2.293a1 1 0 0 1 0-1.414M8 3a1 1 0 0 1 .707 1.707L7.414 6l2.293 2.293a1 1 0 1 1-1.414 1.414L6 7.414 4.707 8.707A1 1 0 0 1 3 8V4a1 1 0 0 1 .03-.24l.013-.053a1 1 0 0 1 .122-.257c.09-.137.214-.251.36-.33q.023-.013.048-.023a1 1 0 0 1 .134-.054l.062-.016.034-.007.006-.001.088-.014Q3.947 2.999 4 3zM20 3q.084 0 .165.015l.026.004.01.002.03.006.061.016a1 1 0 0 1 .135.054l.048.023a1 1 0 0 1 .481.587l.014.053q.03.116.03.24v4a1 1 0 0 1-1.707.707L18 7.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L16.586 6l-1.293-1.293A1 1 0 0 1 16 3z"
        />
      </svg>
    ))
);
ExpandIconFill.displayName = "ExpandIconFill";
export { ExpandIconFill };
