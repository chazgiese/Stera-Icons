import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconBold = memo(
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
          d="M8.293 14.293a1 1 0 1 1 1.414 1.414L6.414 19H8a1 1 0 1 1 0 2H4q-.085-.001-.166-.016-.015-.001-.031-.005l-.034-.007-.062-.016a1 1 0 0 1-.257-.121 1 1 0 0 1-.33-.36l-.02-.042a1 1 0 0 1-.057-.141A1.003 1.003 0 0 1 3 20v-4a1 1 0 1 1 2 0v1.586zM14.293 14.293a1 1 0 0 1 1.414 0L19 17.586V16a1 1 0 1 1 2 0v4q-.001.084-.016.165a.991.991 0 0 1-.105.31 1 1 0 0 1-.587.481l-.062.016-.034.008-.031.004q-.03.007-.062.011L20 21h-4a1 1 0 1 1 0-2h1.586l-3.293-3.293a1 1 0 0 1 0-1.414M8 3a1 1 0 0 1 0 2H6.414l3.293 3.293a1 1 0 1 1-1.414 1.414L5 6.414V8a1 1 0 0 1-2 0V4q0-.12.027-.231l.016-.062a1 1 0 0 1 .122-.257c.09-.137.214-.251.36-.33l.041-.02a1 1 0 0 1 .141-.057l.062-.016.034-.007.006-.001.088-.014Q3.947 2.999 4 3zM20 3q.084 0 .165.015l.026.004.01.002.03.006.061.016a1 1 0 0 1 .14.057l.043.02a1 1 0 0 1 .481.587l.016.062q.027.111.028.231v4a1 1 0 1 1-2 0V6.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L17.586 5H16a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ExpandIconBold.displayName = "ExpandIconBold";
export { ExpandIconBold };
