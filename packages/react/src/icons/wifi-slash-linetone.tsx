import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIconLinetone = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 14.25q.467 0 .913.076l2.157 2.157-1.815 1.868a1.75 1.75 0 0 1-2.51 0l-2.012-2.07c-.292-.301-.268-.746.022-.96a5.45 5.45 0 0 1 3.246-1.071M10.485 11.898a7.9 7.9 0 0 0-3.377 1.56c-.357.283-.856.271-1.146-.026l-.667-.687c-.287-.296-.276-.75.014-1 .93-.8 1.997-1.433 3.16-1.863zM12 9.25c2.546 0 4.879.937 6.692 2.495.29.25.3.704.014 1l-.667.687c-.29.297-.789.308-1.146.026a7.9 7.9 0 0 0-3.625-1.604l-2.524-2.525q.618-.077 1.257-.079M6.569 7.982a12.9 12.9 0 0 0-2.925 1.93c-.333.29-.828.283-1.12-.016l-.666-.687a.704.704 0 0 1 .01-1.014c.87-.791 1.829-1.482 2.858-2.055zM12 4.25c3.886 0 7.433 1.49 10.133 3.945.288.263.296.72.01 1.014l-.667.687c-.291.299-.786.307-1.12.015C18.109 7.941 15.19 6.751 12 6.75c-1.168 0-2.3.16-3.375.46L6.653 5.238A14.9 14.9 0 0 1 12 4.25" />
        </g>
      </svg>
    ))
);
WifiSlashIconLinetone.displayName = "WifiSlashIconLinetone";
export { WifiSlashIconLinetone };
