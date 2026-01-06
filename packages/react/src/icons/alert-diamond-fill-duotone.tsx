import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertDiamondIconFillDuotone = memo(
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
          d="M10.763 1.438c.803-.26 1.67-.26 2.473 0 .518.168.953.465 1.383.83.42.357.9.836 1.482 1.418l4.212 4.212c.582.582 1.062 1.062 1.419 1.483.365.43.66.865.83 1.382.26.804.26 1.67 0 2.473-.17.518-.465.953-.83 1.383-.357.42-.837.9-1.419 1.482l-4.212 4.212c-.582.582-1.061 1.062-1.482 1.42-.43.364-.865.66-1.383.828-.803.261-1.67.261-2.473 0-.517-.168-.953-.464-1.383-.829-.42-.357-.9-.837-1.482-1.419l-4.212-4.212c-.582-.582-1.062-1.061-1.419-1.482-.364-.43-.66-.865-.829-1.383a4 4 0 0 1 0-2.473c.168-.518.464-.953.83-1.382.357-.421.836-.9 1.418-1.483l4.212-4.212C8.48 3.104 8.96 2.625 9.38 2.267c.43-.365.865-.66 1.383-.829M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AlertDiamondIconFillDuotone.displayName = "AlertDiamondIconFillDuotone";
export { AlertDiamondIconFillDuotone };
