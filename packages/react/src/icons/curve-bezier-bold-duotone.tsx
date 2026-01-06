import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconBoldDuotone = memo(
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
          <path d="M9.174 5a2.984 2.984 0 0 0 .458 2.837c-.634.436-1.262 1.037-1.85 1.8-1.157 1.5-2.07 3.5-2.505 5.651a3 3 0 0 0-1.997-.198c.476-2.51 1.53-4.872 2.92-6.675.394-.512.826-.989 1.287-1.415H4.73a1.99 1.99 0 0 0 0-2zM19.27 5a1.99 1.99 0 0 0 0 2h-2.757c.461.426.894.903 1.289 1.415 1.39 1.803 2.441 4.165 2.917 6.675a2.984 2.984 0 0 0-1.997.198c-.435-2.15-1.347-4.15-2.504-5.651-.588-.763-1.217-1.363-1.85-1.8A2.98 2.98 0 0 0 14.825 5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
CurveBezierIconBoldDuotone.displayName = "CurveBezierIconBoldDuotone";
export { CurveBezierIconBoldDuotone };
