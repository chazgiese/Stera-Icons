import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MusicIconFill = memo(
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
          d="M18.42 2.503a2 2 0 0 1 2.33 1.972V15.5l-.002.03.002.032a4.187 4.187 0 0 1-4.187 4.188 2.813 2.813 0 0 1-2.813-2.813 4.19 4.19 0 0 1 4.188-4.187c.474 0 .92.117 1.312.325v-5.19l-10.5 1.75V17.5l-.002.03.002.032a4.187 4.187 0 0 1-4.187 4.188 2.813 2.813 0 0 1-2.813-2.813 4.19 4.19 0 0 1 4.188-4.187c.474 0 .92.117 1.312.325V6.058a2 2 0 0 1 1.67-1.972z"
        />
      </svg>
    ))
);
MusicIconFill.displayName = "MusicIconFill";
export { MusicIconFill };
