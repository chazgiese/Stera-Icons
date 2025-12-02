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
            d="M4.936 10.591a2.25 2.25 0 0 1 3.124.056l5.294 5.294a2.25 2.25 0 0 1 .056 3.124l-.143.152-.024.027a6 6 0 1 1-8.46-8.51zm1.71 1.47a.25.25 0 0 0-.348-.006l-.127.117a4 4 0 0 0 5.658 5.656l.117-.127a.25.25 0 0 0-.006-.346z"
            clipRule="evenodd"
          />
          <path d="M21.293 1.293a1 1 0 0 1 1.414 1.414L19.89 5.525a6 6 0 0 0-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M4.108 18.476a6 6 0 0 0 1.414 1.415l-2.815 2.816a1 1 0 0 1-1.414-1.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.757 4.758a6 6 0 1 1 8.46 8.51l-.153.143c-.886.825-2.268.8-3.125-.057l-.44-.44-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-1.586-1.586-.792.793a1 1 0 1 1-1.414-1.414l.792-.793-.439-.439a2.25 2.25 0 0 1-.056-3.125l.143-.152q.011-.014.024-.026m7.071 1.415a4 4 0 0 0-5.656 0l-.118.127a.25.25 0 0 0 .006.346l4.14 4.14.007.007.006.007 1.14 1.14a.25.25 0 0 0 .348.006l.127-.117a4 4 0 0 0 0-5.656"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PlugIconLinetone.displayName = "PlugIconLinetone";
export { PlugIconLinetone };
