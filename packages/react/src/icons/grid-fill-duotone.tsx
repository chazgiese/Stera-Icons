import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GridIconFillDuotone = memo(
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
          <path d="M14.667 16.668V22H9.333v-5.332zM7.333 16.668v5.33a21 21 0 0 1-1.585-.042c-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564-.036-.442-.04-.967-.042-1.584zM21.998 16.668a21 21 0 0 1-.042 1.584c-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.443.036-.968.04-1.585.041v-5.329zM22 14.668h-5.333V9.334H22zM2 9.334h5.333v5.334H2zM14.667 9.334v5.334H9.333V9.334zM16.667 2.002c.617.001 1.142.006 1.585.042.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.036.443.04.968.042 1.586h-5.331zM7.333 7.334H2.002a21 21 0 0 1 .042-1.586c.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392a21 21 0 0 1 1.585-.042zM14.667 2v5.334H9.333V2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.333 7.334h5.334V2h2v5.334H22v2h-5.333v5.334H22v2h-5.333V22h-2v-5.332H9.333V22h-2v-5.332H2v-2h5.333V9.334H2v-2h5.333V2h2zm0 7.334h5.334V9.334H9.333z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GridIconFillDuotone.displayName = "GridIconFillDuotone";
export { GridIconFillDuotone };
