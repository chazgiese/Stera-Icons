import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlugIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M4.936 10.59a2.25 2.25 0 0 1 3.124.056l5.294 5.294a2.25 2.25 0 0 1 .056 3.124l-.143.153-.024.026a6 6 0 1 1-8.46-8.51zm1.71 1.47a.25.25 0 0 0-.348-.005l-.127.117a4 4 0 0 0 5.658 5.656l.117-.127a.25.25 0 0 0-.006-.346z"
            clipRule="evenodd"
          />
          <path d="M21.293 1.293a1 1 0 0 1 1.415 1.414l-3.5 3.5-1.415-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M4.109 18.476a6 6 0 0 0 1.414 1.415l-2.816 2.816a1 1 0 0 1-1.414-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.757 4.758a6 6 0 1 1 8.46 8.51l-.152.143a2.25 2.25 0 0 1-3.125-.057l-.44-.44-.793.793a1 1 0 1 1-1.414-1.414l.792-.793L12.5 9.914l-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-.438-.439a2.25 2.25 0 0 1-.057-3.125l.143-.152zm7.071 1.415a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .007.346l4.138 4.14.008.007.006.007 1.14 1.14a.25.25 0 0 0 .348.006l.127-.117a4 4 0 0 0 0-5.656"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIconLinetone.displayName = "PlugIconLinetone";
export { PlugIconLinetone };
