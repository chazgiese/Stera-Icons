import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UsersIconFilltone = memo(
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
          d="M15 2a6 6 0 0 1 3.77 10.666c2.197.854 3.859 2.511 4.676 4.857.236.678.469 1.289.254 2.18-.09.374-.29.738-.491 1.02-.2.281-.478.591-.802.8-.793.51-1.657.477-2.607.477h-1.692q.187-.215.324-.408c.263-.371.575-.912.726-1.537l.054-.252c.227-1.24-.135-2.157-.35-2.773-.717-2.058-2-3.682-3.677-4.795a7.484 7.484 0 0 0-1.5-10.09A6 6 0 0 1 15 2"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9 2a6 6 0 0 1 3.77 10.666c2.197.854 3.859 2.511 4.676 4.857.236.678.469 1.289.254 2.18-.09.374-.29.738-.491 1.02-.2.281-.478.591-.802.8-.793.51-1.657.477-2.607.477H4.2c-.95 0-1.814.033-2.607-.477-.324-.209-.602-.519-.802-.8S.39 20.077.3 19.703c-.215-.891.018-1.502.254-2.18.817-2.345 2.479-4.002 4.675-4.857A6 6 0 0 1 9 2"
        />
      </svg>
    ))
);
UsersIconFilltone.displayName = "UsersIconFilltone";
export { UsersIconFilltone };
