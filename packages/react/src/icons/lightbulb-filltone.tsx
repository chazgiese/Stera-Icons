import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconFilltone = memo(
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
          <path d="M15.563 20A2.75 2.75 0 0 1 13 21.75h-2A2.75 2.75 0 0 1 8.438 20zM15.75 17v1h-7.5v-1zM12 1.25a6.75 6.75 0 0 1 6.018 9.812c-.251.492-.529.983-.79 1.455-.266.478-.519.941-.74 1.407A10 10 0 0 0 16.044 15h-8.09a10 10 0 0 0-.442-1.076c-.222-.466-.475-.93-.74-1.407-.263-.472-.54-.963-.79-1.455A6.75 6.75 0 0 1 12 1.25" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.563 20H8.436a2.7 2.7 0 0 1-.187-1v-1h7.5v1c0 .353-.066.69-.187 1M15.75 17h-7.5v-.342c0-.555-.109-1.103-.295-1.658h8.09a5.2 5.2 0 0 0-.295 1.658z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M13.911 21.592a2 2 0 0 1-3.821 0c.285.1.591.158.911.158h2c.32 0 .625-.058.91-.158"
        />
      </svg>
    ))
);
LightbulbIconFilltone.displayName = "LightbulbIconFilltone";
export { LightbulbIconFilltone };
