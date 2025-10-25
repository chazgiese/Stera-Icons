import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineBottleIconLinetone = memo(
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
          d="M14.75 7.5c0-.022-.012-.003.045.062.063.07.174.152.318.214A3.5 3.5 0 0 1 17.25 11v9a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3v-9a3.5 3.5 0 0 1 2.137-3.223.9.9 0 0 0 .318-.214c.058-.065.045-.084.045-.063h2c0 1.153-.931 1.842-1.584 2.118A1.5 1.5 0 0 0 8.75 11v9a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-9c0-.62-.376-1.154-.916-1.383-.652-.276-1.584-.964-1.584-2.117z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.73 1.012a2.25 2.25 0 0 1 2.02 2.238V7.5h-2V3.25a.25.25 0 0 0-.2-.245L12.5 3h-1a.25.25 0 0 0-.25.25V7.5h-2V3.25A2.25 2.25 0 0 1 11.5 1h1z"
        />
      </svg>
    ))
);
WineBottleIconLinetone.displayName = "WineBottleIconLinetone";
export { WineBottleIconLinetone };
