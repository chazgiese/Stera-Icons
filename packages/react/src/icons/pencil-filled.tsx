import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilFilled = memo(
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
          d="M3.533 14.749q.21.015.423.052c1.116.197 2.307.877 3.337 1.906 1.029 1.03 1.71 2.222 1.907 3.338q.037.212.05.422l-.007.003-6 1.5a1 1 0 0 1-1.212-1.213zM12.844 5.241q.303.005.612.06c1.116.197 2.307.877 3.337 1.906 1.029 1.03 1.71 2.222 1.907 3.338q.054.308.058.61l-7.776 7.777c-.407-1.338-1.233-2.598-2.274-3.639-1.042-1.041-2.302-1.868-3.64-2.275zM15.794 2.293c.836-.836 1.88-1.084 2.88-.907.96.17 1.844.716 2.534 1.406s1.236 1.574 1.406 2.533c.177 1-.07 2.046-.906 2.882l-1.226 1.225c-.407-1.338-1.233-2.598-2.274-3.639-1.042-1.041-2.302-1.868-3.64-2.275z"
        />
      </svg>
    ))
);
PencilFilled.displayName = "PencilFilled";
export { PencilFilled };
