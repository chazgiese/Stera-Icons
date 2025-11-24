import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserSettingsIconFilltone = memo(
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
          d="M19.38 14.967a1 1 0 0 1 1.732 1l-.336.58a3 3 0 0 1 .555.957l.672.002a1 1 0 1 1-.006 2l-.669-.002a3 3 0 0 1-.552.95l.335.58a1 1 0 0 1-1.732 1l-.337-.583a3 3 0 0 1-.541.05q-.285-.002-.555-.053l-.334.58a1 1 0 0 1-1.732-.999l.337-.585a3 3 0 0 1-.544-.94l-.67.002a1.001 1.001 0 0 1-.006-2l.674-.002a3 3 0 0 1 .546-.947l-.338-.586a1 1 0 0 1 1.732-1l.336.582a3 3 0 0 1 1.095-.003zm-.879 2.535a1.002 1.002 0 1 0 .497 1.868 1 1 0 0 0-.497-1.868"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 3.5a5 5 0 0 1 2.593 9.275c1.894.428 3.444 1.35 4.484 2.714l-.035.062a3 3 0 0 0-1.095.002l-.336-.581a1 1 0 0 0-1.732 1l.338.586a3 3 0 0 0-.546.946l-.674.002a1 1 0 1 0 .006 2l.67-.002a3 3 0 0 0 .544.94l-.032.056H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.489-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
          opacity={0.4}
        />
      </svg>
    ))
);
UserSettingsIconFilltone.displayName = "UserSettingsIconFilltone";
export { UserSettingsIconFilltone };
