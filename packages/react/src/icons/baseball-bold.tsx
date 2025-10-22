import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BaseballIconBold = memo(
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
          d="M15.45 9.808a1 1 0 0 1 1.397-.223 11 11 0 0 0 .72.481 1.001 1.001 0 0 1-1.046 1.705 13 13 0 0 1-.849-.567 1 1 0 0 1-.221-1.396M9.588 16.847a1 1 0 0 1 1.618-1.176q.3.414.567.85a1 1 0 0 1-1.706 1.044q-.225-.368-.479-.718M6.103 12.56c.289-.471.905-.619 1.376-.33a13 13 0 0 1 .849.567 1 1 0 0 1-1.175 1.62 11 11 0 0 0-.72-.483 1 1 0 0 1-.33-1.375M12.226 7.48a1.001 1.001 0 0 1 1.707-1.044q.225.368.479.719a1 1 0 0 1-1.619 1.175q-.3-.415-.567-.85"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556m1.414 1.414a8.96 8.96 0 0 0-2.516 4.907q.3.056.601.128a1 1 0 1 1-.467 1.944l-.235-.052a8.97 8.97 0 0 0 2.617 5.801 8.96 8.96 0 0 0 5.797 2.616q-.024-.117-.05-.234a1 1 0 0 1 1.944-.466q.07.298.127.6a8.96 8.96 0 0 0 4.91-2.516 8.96 8.96 0 0 0 2.515-4.906q-.301-.056-.6-.127a1 1 0 0 1 .465-1.945q.117.027.236.052a8.96 8.96 0 0 0-2.616-5.802 8.96 8.96 0 0 0-5.799-2.616l.052.235a1 1 0 0 1-1.944.467q-.071-.3-.129-.602a8.96 8.96 0 0 0-4.908 2.516"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BaseballIconBold.displayName = "BaseballIconBold";
export { BaseballIconBold };
