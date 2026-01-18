import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserSettingsIconFill = memo(
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
          d="M19.38 14.967a1 1 0 0 1 1.732 1l-.336.58a3 3 0 0 1 .555.957l.672.002a1 1 0 1 1-.006 2l-.669-.002a3 3 0 0 1-.552.95l.335.58a1 1 0 0 1-1.732 1l-.337-.583a3 3 0 0 1-.541.051q-.285-.001-.555-.054l-.334.58a1.001 1.001 0 0 1-1.732-.999l.337-.585a3 3 0 0 1-.544-.94l-.67.002a1 1 0 1 1-.006-2l.674-.002c.123-.35.31-.67.546-.946l-.338-.586a1 1 0 0 1 1.732-1l.336.58a3 3 0 0 1 1.095-.001zm-.879 2.535a1.002 1.002 0 0 0-.503 1.864 1 1 0 0 0 1 .004 1 1 0 0 0-.497-1.868"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 3.5a5 5 0 0 1 2.593 9.275q.172.04.342.084c.268.072.403.107.456.178.046.064.06.14.039.216-.024.085-.152.175-.407.356a5.99 5.99 0 0 0-2.18 6.891H7.2c-.948 0-1.614.016-2.278-.441-.253-.175-.488-.465-.662-.739s-.337-.61-.387-.914a2.3 2.3 0 0 1 .016-.94c.066-.272.187-.526.31-.786.953-2.027 2.805-3.362 5.207-3.905A5 5 0 0 1 12 3.5"
        />
      </svg>
    ))
);
UserSettingsIconFill.displayName = "UserSettingsIconFill";
export { UserSettingsIconFill };
