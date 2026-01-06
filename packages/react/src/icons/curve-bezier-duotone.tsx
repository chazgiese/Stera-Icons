import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconDuotone = memo(
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
          fillRule="evenodd"
          d="M4.582 6.75H8.16c-.866.694-1.65 1.585-2.312 2.586-1.118 1.686-1.96 3.765-2.354 5.96a2.76 2.76 0 0 1 1.5.14c.365-1.944 1.119-3.785 2.105-5.272.781-1.18 1.672-2.088 2.592-2.67a2.74 2.74 0 0 1-.338-2.244H4.583a1.74 1.74 0 0 1 0 1.5m10.065-1.5h4.771a1.74 1.74 0 0 0 0 1.5H15.84c.866.694 1.65 1.585 2.312 2.586 1.118 1.686 1.96 3.765 2.354 5.96a2.76 2.76 0 0 0-1.5.14c-.366-1.944-1.119-3.785-2.105-5.272-.781-1.18-1.672-2.088-2.592-2.67a2.74 2.74 0 0 0 .338-2.244"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.647 5.25a2.751 2.751 0 1 0-5.294 1.502 2.751 2.751 0 0 0 5.294-1.502M12 4.75a1.248 1.248 0 0 1 .9 2.117 1.246 1.246 0 0 1-1.8 0A1.246 1.246 0 0 1 11 5.25c.228-.304.591-.5 1-.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22.75 6a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.582 5.25a1.75 1.75 0 1 0-3.163 1.5 1.75 1.75 0 0 0 3.163-1.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4 15.25q-.26 0-.506.046A2.75 2.75 0 1 0 4 15.25m-.714 1.724a1.245 1.245 0 0 1 1.5.054 1.25 1.25 0 1 1-1.5-.054M20.506 15.296a2.76 2.76 0 0 0-1.5.14 2.751 2.751 0 1 0 1.5-.14M18.75 18A1.25 1.25 0 0 1 20 16.75a1.249 1.249 0 1 1 0 2.5c-.69 0-1.25-.56-1.25-1.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurveBezierIconDuotone.displayName = "CurveBezierIconDuotone";
export { CurveBezierIconDuotone };
