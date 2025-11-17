import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIconFilled = memo(
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
          d="M9 14a1 1 0 0 1 .427.097l.048.023a1 1 0 0 1 .426.447q.014.027.026.057.027.066.043.136A1 1 0 0 1 10 15v4a1 1 0 0 1-1.707.707L7 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L5.586 17l-1.293-1.293A1 1 0 0 1 5 14zM19 14a1 1 0 0 1 .707 1.707L18.414 17l2.293 2.293a1 1 0 0 1-1.414 1.414L17 18.414l-1.293 1.293A1 1 0 0 1 14 19v-4q0-.125.03-.24l.013-.053a1 1 0 0 1 .122-.257c.09-.137.214-.251.36-.33l.048-.023q.065-.031.134-.054l.062-.016.034-.007.006-.001.089-.014Q14.948 14 15 14zM3.293 3.293a1 1 0 0 1 1.414 0L7 5.586l1.293-1.293A1 1 0 0 1 10 5v4a1 1 0 0 1-.031.24l-.013.051a1 1 0 0 1-.125.263 1 1 0 0 1-.54.402l-.05.013-.047.012-.022.002Q9.088 10 9 10H5a1 1 0 0 1-.707-1.707L5.586 7 3.293 4.707a1 1 0 0 1 0-1.414M19.293 3.293a1 1 0 1 1 1.414 1.414L18.414 7l1.293 1.293A1 1 0 0 1 19 10h-4q-.084-.001-.166-.016l-.031-.004-.03-.007a1 1 0 0 1-.206-.073 1 1 0 0 1-.447-.425l-.02-.042a1 1 0 0 1-.057-.142l-.013-.05A1 1 0 0 1 14 9V5a1 1 0 0 1 1.707-.708L17 5.586z"
        />
      </svg>
    ))
);
CollapseIconFilled.displayName = "CollapseIconFilled";
export { CollapseIconFilled };
