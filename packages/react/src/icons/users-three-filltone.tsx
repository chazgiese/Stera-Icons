import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UsersThreeIconFilltone = memo(
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
          <path d="M7 3a4.5 4.5 0 0 1 4.068 2.572 6.002 6.002 0 0 0-4.312 8.843A6.8 6.8 0 0 0 5.029 17h-.971c-.575 0-1.252.033-1.87-.368-.261-.17-.47-.412-.613-.614a2.4 2.4 0 0 1-.37-.786c-.16-.69.031-1.168.185-1.592.475-1.315 1.348-2.296 2.484-2.906A4.5 4.5 0 0 1 7 3M17 3a4.5 4.5 0 0 1 4.5 4.5c0 1.27-.528 2.416-1.375 3.234 1.136.61 2.01 1.59 2.485 2.906.154.424.346.902.185 1.592-.07.304-.228.583-.37.786a2.3 2.3 0 0 1-.612.614c-.619.4-1.295.368-1.87.368h-.973a6.8 6.8 0 0 0-1.727-2.584 6.001 6.001 0 0 0-4.31-8.844A4.5 4.5 0 0 1 17 3" />
        </g>
        <path
          fill="currentColor"
          d="M12 7a4.5 4.5 0 0 1 4.5 4.5c0 1.27-.528 2.416-1.375 3.234 1.136.61 2.01 1.59 2.485 2.906.154.424.345.902.185 1.592-.07.303-.228.583-.37.786a2.4 2.4 0 0 1-.613.614c-.618.4-1.295.368-1.869.368H9.057c-.574 0-1.251.033-1.87-.368-.26-.17-.47-.412-.612-.614a2.4 2.4 0 0 1-.37-.786c-.16-.69.031-1.168.185-1.592.475-1.315 1.348-2.296 2.484-2.906A4.5 4.5 0 0 1 12 7"
        />
      </svg>
    ))
);
UsersThreeIconFilltone.displayName = "UsersThreeIconFilltone";
export { UsersThreeIconFilltone };
