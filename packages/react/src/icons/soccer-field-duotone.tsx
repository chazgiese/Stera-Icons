import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerFieldIconDuotone = memo(
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
          fillRule="evenodd"
          d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.75 4.75v4.088a3.25 3.25 0 0 1 0 6.323v4.089h-1.5v-4.089a3.25 3.25 0 0 1 0-6.323V4.75zm-.75 5.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21.25 9.75h-2v4.5h2v1.5H18.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h2.75zM5.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2.75v-1.5h2v-4.5h-2v-1.5z"
        />
      </svg>
    ))
);
SoccerFieldIconDuotone.displayName = "SoccerFieldIconDuotone";
export { SoccerFieldIconDuotone };
