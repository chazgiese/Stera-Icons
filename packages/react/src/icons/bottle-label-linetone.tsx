import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BottleLabelIconLinetone = memo(
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
          d="M12.343 1a2.25 2.25 0 0 1 2.243 2.077l.364 4.732a1 1 0 0 0 .216.547l1.177 1.471A3 3 0 0 1 17 11.701V20a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-8.299a3 3 0 0 1 .657-1.874l1.177-1.47a1 1 0 0 0 .216-.548l.364-4.732A2.25 2.25 0 0 1 11.657 1zm-.686 2a.25.25 0 0 0-.249.23l-.364 4.732a3 3 0 0 1-.649 1.644L9.22 11.077a1 1 0 0 0-.219.624V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8.299a1 1 0 0 0-.219-.624l-1.177-1.47a3 3 0 0 1-.648-1.645l-.364-4.732a.25.25 0 0 0-.25-.23z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 19H9v-2h6zM15 14H9v-2h6zM14.25 1a1 1 0 1 1 0 2h-4.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BottleLabelIconLinetone.displayName = "BottleLabelIconLinetone";
export { BottleLabelIconLinetone };
