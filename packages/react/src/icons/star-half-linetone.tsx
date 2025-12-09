import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIconLinetone = memo(
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
          d="M12 1v2.654l2.018 4.67c.228.526.726.885 1.295.938l5.07.467-3.822 3.346a1.56 1.56 0 0 0-.496 1.523l1.12 4.95-4.386-2.594-.19-.096a1.6 1.6 0 0 0-.609-.123v2.07l5.03 2.975c1.174.694 2.634-.342 2.328-1.692l-1.286-5.678 4.393-3.843c1.04-.91.475-2.61-.889-2.736l-5.825-.538-2.312-5.348-.054-.115A1.55 1.55 0 0 0 12 1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.97 21.78 12 18.805V1c-.584 0-1.167.315-1.44.945L8.249 7.293l-5.824.538c-1.364.126-1.93 1.826-.889 2.736l4.392 3.843-1.285 5.678c-.306 1.35 1.154 2.386 2.328 1.692"
        />
      </svg>
    ))
);
StarHalfIconLinetone.displayName = "StarHalfIconLinetone";
export { StarHalfIconLinetone };
