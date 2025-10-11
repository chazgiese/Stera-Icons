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
          d="M15.45 9.807a1 1 0 0 1 1.397-.222 11 11 0 0 0 .72.481 1.001 1.001 0 0 1-1.046 1.705 14 14 0 0 1-.849-.567 1 1 0 0 1-.222-1.397M9.81 15.45a1 1 0 0 1 1.396.22q.3.416.567.85a1 1 0 1 1-1.706 1.045 11 11 0 0 0-.48-.719 1 1 0 0 1 .222-1.397M6.103 12.559c.288-.47.905-.618 1.376-.33a13 13 0 0 1 .849.567 1 1 0 0 1-1.175 1.62 11 11 0 0 0-.721-.482 1 1 0 0 1-.33-1.375M12.226 7.48a1.001 1.001 0 0 1 1.707-1.044q.225.367.479.718a1 1 0 0 1-1.619 1.175q-.3-.415-.567-.849"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.222 4.222c4.296-4.296 11.261-4.296 15.557 0 4.295 4.296 4.295 11.26 0 15.556-4.296 4.296-11.26 4.296-15.557 0-4.295-4.295-4.295-11.26 0-15.556m1.415 1.414a8.96 8.96 0 0 0-2.516 4.907q.3.057.6.127a1 1 0 1 1-.467 1.945q-.117-.027-.235-.052a8.97 8.97 0 0 0 2.618 5.801 8.96 8.96 0 0 0 5.796 2.616q-.024-.118-.05-.234a1 1 0 0 1 1.944-.467q.07.3.126.602a8.96 8.96 0 0 0 4.911-2.517 8.96 8.96 0 0 0 2.515-4.906q-.301-.057-.601-.127a1 1 0 0 1 .466-1.945q.117.027.236.051a8.96 8.96 0 0 0-2.616-5.8 8.96 8.96 0 0 0-5.799-2.616l.052.234a1 1 0 0 1-1.944.466q-.071-.3-.129-.6a8.96 8.96 0 0 0-4.907 2.515"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BaseballIconBold.displayName = "BaseballIconBold";
export { BaseballIconBold };
