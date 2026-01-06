import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsDownIconFill = memo(
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
          d="M15.709 2a4 4 0 0 1 3.849 2.92h.002v.002l.003.008.01.03q.012.042.034.117l.127.423c.106.357.25.848.405 1.386.303 1.06.656 2.35.81 3.133.097.499.188 1.082.267 1.635C21.47 13.456 20.049 15 18.277 15h-1.82c.316 1.067.497 2.306.37 3.44-.097.865-.385 1.766-1.032 2.46-.672.719-1.621 1.1-2.795 1.1a1 1 0 0 1-.795-.393l-.073-.11-3.008-5.265a2.4 2.4 0 0 0-.624-.718V4a2 2 0 0 1 2-2zM7.036 2A4 4 0 0 0 6.5 4v10.968A4 4 0 0 1 3 11V4.998A3 3 0 0 1 6 2z"
        />
      </svg>
    ))
);
ThumbsDownIconFill.displayName = "ThumbsDownIconFill";
export { ThumbsDownIconFill };
