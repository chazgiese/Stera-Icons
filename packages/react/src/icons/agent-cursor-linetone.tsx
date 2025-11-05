import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AgentCursorIconLinetone = memo(
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
          d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11a1 1 0 1 1-2 0c0-1.416 0-2.419-.064-3.202-.064-.772-.183-1.244-.372-1.614a4 4 0 0 0-1.748-1.748c-.37-.19-.842-.308-1.614-.372C15.42 4 14.416 4 13 4h-2c-1.416 0-2.419 0-3.202.064-.772.064-1.244.183-1.614.372a4 4 0 0 0-1.748 1.748c-.19.37-.308.842-.372 1.614C4 8.58 4 9.584 4 11v2c0 1.416 0 2.419.064 3.202.064.772.183 1.244.372 1.614a4 4 0 0 0 1.748 1.749c.37.188.842.307 1.614.37C8.58 20 9.584 20 11 20a1 1 0 1 1 0 2c-1.384 0-2.481 0-3.365-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.481 2 14.384 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.127 13.111c-.396-1.188.687-2.32 1.87-2.017l.114.033 7.817 2.605c1.457.486 1.42 2.56-.054 2.993l-3.206.943-.942 3.206c-.434 1.473-2.508 1.51-2.994.054zm4.067 5.878.71-2.408a1 1 0 0 1 .677-.677l2.41-.71-5.694-1.897z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M8.353 14.323a1 1 0 0 1 1.414 1.414l-1.054 1.056-.076.07a1 1 0 0 1-1.408-1.409l.07-.075zM6.034 10.435a1 1 0 0 1 1.225-.707l1.441.387a1 1 0 1 1-.517 1.932L6.74 11.66a1 1 0 0 1-.707-1.226M15.379 7.299a1 1 0 0 1 1.414 1.414l-1.055 1.054a1 1 0 1 1-1.414-1.414zM10.435 6.034a1 1 0 0 1 1.224.707l.387 1.441a1 1 0 0 1-1.932.518l-.387-1.441a1 1 0 0 1 .707-1.225"
        />
      </svg>
    ))
);
AgentCursorIconLinetone.displayName = "AgentCursorIconLinetone";
export { AgentCursorIconLinetone };
