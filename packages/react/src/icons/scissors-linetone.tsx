import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScissorsIconLinetone = memo(
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
          <path d="M22.282 16.475a.5.5 0 0 1 .194.661c-.4.78-1.3 1.16-2.138.903l-9.039-2.77a2.5 2.5 0 0 1-.393-.16l4.505-2.6z" />
          <path
            fillRule="evenodd"
            d="M1.5 5.63a3.5 3.5 0 0 1 6.435 2.562l1.326.766c-.209.266-.38.564-.506.886l-.36.922-1.46-.842A3.5 3.5 0 0 1 1.5 5.63m3.782.45a1.5 1.5 0 1 0-1.5 2.6 1.5 1.5 0 0 0 1.5-2.6"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.305 5.854a1.795 1.795 0 0 1 2.14.89.5.5 0 0 1-.195.662L7.904 15.687a3.5 3.5 0 1 1-1-1.73l1.707-.986 1.077-2.764a2.5 2.5 0 0 1 1.57-1.474zM5.799 15.751a1.5 1.5 0 1 0-2.599 1.5 1.5 1.5 0 0 0 2.599-1.5M11.5 10.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScissorsIconLinetone.displayName = "ScissorsIconLinetone";
export { ScissorsIconLinetone };
