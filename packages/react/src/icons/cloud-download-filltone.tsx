import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CloudDownloadIconFilltone = memo(
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
          d="M12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 8a1 1 0 0 1 1 1v5.586l1.793-1.793a1 1 0 0 1 1.414 1.414l-3.5 3.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414L11 14.586V9a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CloudDownloadIconFilltone.displayName = "CloudDownloadIconFilltone";
export { CloudDownloadIconFilltone };
