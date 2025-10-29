import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconFilled = memo(
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
          d="M20.853 6.454a1.5 1.5 0 0 1 2.794 1.092 12.5 12.5 0 0 1-1.942 3.328l1.803 1.864a1.5 1.5 0 0 1-2.156 2.086l-1.803-1.863a12.5 12.5 0 0 1-3.08 1.713l.626 2.526a1.5 1.5 0 0 1-2.912.721l-.625-2.52q-.765.098-1.558.1c-.67 0-1.33-.055-1.972-.157l-.715 2.484a1.5 1.5 0 0 1-2.883-.832l.714-2.477c-.949-.4-1.838-.912-2.65-1.523l-1.79 1.87a1.5 1.5 0 0 1-2.167-2.075l1.794-1.872A12.5 12.5 0 0 1 .353 7.546a1.5 1.5 0 0 1 2.794-1.092 9.52 9.52 0 0 0 6.093 5.637 1.5 1.5 0 0 1 .303.086 9.505 9.505 0 0 0 11.31-5.723"
        />
      </svg>
    ))
);
EyeClosedIconFilled.displayName = "EyeClosedIconFilled";
export { EyeClosedIconFilled };
