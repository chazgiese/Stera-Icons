import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconFill = memo(
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
          d="M15.75 19c0 1.2-.769 2.216-1.84 2.592a2 2 0 0 1-3.821 0A2.75 2.75 0 0 1 8.25 19v-2.25h7.5zM12 1.25a6.75 6.75 0 0 1 6.018 9.812c-.251.492-.529.983-.79 1.455-.266.478-.519.941-.74 1.407-.215.45-.392.89-.52 1.326H8.032a9 9 0 0 0-.52-1.326c-.221-.466-.474-.93-.74-1.407-.262-.472-.539-.963-.79-1.455A6.75 6.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
LightbulbIconFill.displayName = "LightbulbIconFill";
export { LightbulbIconFill };
