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
          <path d="M12 14c1.266 0 2.437.415 3.393 1.12.435.32.431.946.054 1.334l-2.013 2.071a2 2 0 0 1-2.868 0l-2.013-2.07c-.377-.389-.382-1.015.054-1.336A5.7 5.7 0 0 1 12 14" />
          <path d="M12 9c2.608 0 4.999.96 6.855 2.556.41.353.407.975.03 1.363l-.668.686c-.393.404-1.038.399-1.48.05a7.61 7.61 0 0 0-9.474 0c-.442.349-1.087.354-1.48-.05l-.668-.686c-.377-.388-.38-1.01.03-1.363A10.48 10.48 0 0 1 12 9" />
          <path d="M12 4c3.95 0 7.557 1.515 10.3 4.01.401.365.4.986.022 1.374l-.668.686c-.392.404-1.039.4-1.462.03C17.985 8.167 15.125 7 12 7s-5.986 1.167-8.192 3.1c-.424.37-1.07.374-1.462-.03l-.668-.686c-.377-.388-.38-1.009.02-1.373C4.442 5.515 8.05 4 12 4" />
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
