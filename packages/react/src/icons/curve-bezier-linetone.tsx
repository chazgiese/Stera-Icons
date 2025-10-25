import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconLinetone = memo(
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
          <path d="M10.27 5a1.99 1.99 0 0 0 .245 2.336c-.93.408-1.872 1.184-2.733 2.3-1.309 1.698-2.304 4.034-2.65 6.503a1 1 0 0 1-1.98-.278c.39-2.795 1.515-5.46 3.047-7.446.395-.512.827-.989 1.288-1.415H4a1 1 0 0 1 0-2zM20 5a1 1 0 1 1 0 2h-3.487c.461.426.894.903 1.289 1.415 1.532 1.987 2.655 4.652 3.047 7.446a1 1 0 1 1-1.98.278c-.346-2.47-1.342-4.805-2.651-6.502-.862-1.117-1.805-1.893-2.734-2.301A1.99 1.99 0 0 0 13.73 5z" />
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
CurveBezierIconLinetone.displayName = "CurveBezierIconLinetone";
export { CurveBezierIconLinetone };
