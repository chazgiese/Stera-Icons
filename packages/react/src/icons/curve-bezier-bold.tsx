import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIconBold = memo(
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
          d="M12 3c1.306 0 2.414.835 2.826 2h4.444A1.998 1.998 0 0 1 23 6a2 2 0 0 1-3.73 1h-2.755c.788.73 1.498 1.617 2.103 2.6.983 1.596 1.725 3.494 2.103 5.49A2.999 2.999 0 1 1 17 18c0-1.2.705-2.232 1.722-2.712a14.4 14.4 0 0 0-1.807-4.64c-.753-1.222-1.635-2.186-2.546-2.814a2.99 2.99 0 0 1-4.74 0c-.91.629-1.79 1.592-2.543 2.814a14.4 14.4 0 0 0-1.809 4.64A2.997 2.997 0 0 1 4 21a3 3 0 0 1-.722-5.91A16.4 16.4 0 0 1 5.383 9.6c.605-.983 1.314-1.87 2.102-2.6H4.73A1.998 1.998 0 0 1 1 6a2 2 0 0 1 3.73-1h4.444c.412-1.165 1.52-2 2.826-2M4 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m16 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurveBezierIconBold.displayName = "CurveBezierIconBold";
export { CurveBezierIconBold };
