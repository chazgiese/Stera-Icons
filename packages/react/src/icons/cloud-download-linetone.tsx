import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CloudDownloadIconLinetone = memo(
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
          d="M12 4a7 7 0 0 1 6.327 4.009A6 6 0 0 1 18 20h-1a1 1 0 1 1 0-2h1a4 4 0 1 0-.273-7.99 1 1 0 0 1-1.01-.666A5.001 5.001 0 0 0 7 11l.003.105a1 1 0 0 1-1.25.989A3 3 0 1 0 5 18h2a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10l.071.002A7 7 0 0 1 12 4"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 10a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 16.586V11a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CloudDownloadIconLinetone.displayName = "CloudDownloadIconLinetone";
export { CloudDownloadIconLinetone };
