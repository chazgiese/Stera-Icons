import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIconFilltone = memo(
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
          <path d="M12 14q.315 0 .62.034l2.626 2.626-1.812 1.865a2 2 0 0 1-2.869 0l-2.012-2.07c-.377-.389-.382-1.015.053-1.336A5.7 5.7 0 0 1 12 14M10.697 12.111a7.64 7.64 0 0 0-3.434 1.543c-.442.35-1.087.355-1.48-.049l-.668-.686c-.377-.388-.38-1.01.03-1.363a10.6 10.6 0 0 1 3.127-1.87zM12 9c2.608 0 4.999.96 6.855 2.556.41.353.407.975.03 1.363l-.668.686c-.393.404-1.038.399-1.48.05a7.65 7.65 0 0 0-3.158-1.49l-3.06-3.06Q11.248 9.001 12 9M12 4c3.95 0 7.557 1.515 10.3 4.01.401.365.4.986.022 1.374l-.668.686c-.392.404-1.039.4-1.463.03C17.985 8.167 15.125 7 12 7c-1.095 0-2.157.146-3.17.415l-2.371-2.37A15.1 15.1 0 0 1 12 4M6.757 8.17a12.6 12.6 0 0 0-2.95 1.93c-.423.37-1.069.374-1.461-.03l-.668-.686c-.377-.388-.38-1.009.02-1.373.867-.789 1.82-1.48 2.843-2.056z" />
        </g>
        <path
          fill="currentColor"
          d="M3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
WifiSlashIconFilltone.displayName = "WifiSlashIconFilltone";
export { WifiSlashIconFilltone };
