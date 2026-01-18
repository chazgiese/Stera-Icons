import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleIconFill = memo(
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
          d="M6.006 3.5a1.5 1.5 0 0 1 1.5 1.501q0 .057-.006.114V17.5h12.384q.057-.005.115-.006A1.5 1.5 0 0 1 21.5 19a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19V5A1.5 1.5 0 0 1 6 3.5z"
        />
        <path
          fill="currentColor"
          d="M18.853 13.24a1.5 1.5 0 0 1 1.89.963l.004.012a1.5 1.5 0 0 1-2.853.926l-.004-.01a1.5 1.5 0 0 1 .962-1.89M16.44 9.554a1.5 1.5 0 0 1 2.096.329l.008.01a1.5 1.5 0 0 1-2.427 1.764l-.006-.008a1.5 1.5 0 0 1 .33-2.095M13.012 6.787a1.5 1.5 0 0 1 2.095-.33q.006.002.01.007a1.5 1.5 0 0 1-1.766 2.425l-.008-.006a1.5 1.5 0 0 1-.331-2.096M8.896 5.218a1.5 1.5 0 0 1 1.89-.965l.01.004A1.5 1.5 0 0 1 9.87 7.11q-.005-.001-.01-.004a1.5 1.5 0 0 1-.963-1.888"
        />
      </svg>
    ))
);
AngleIconFill.displayName = "AngleIconFill";
export { AngleIconFill };
