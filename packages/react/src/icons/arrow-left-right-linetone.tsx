import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftRightIconLinetone = memo(
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
        <path fill="currentColor" d="M22 13H2v-2h20z" opacity={0.4} />
        <path
          fill="currentColor"
          d="M5.793 6.793a1 1 0 0 1 1.414 1.414L3.414 12l3.793 3.793a1 1 0 0 1-1.414 1.414l-4.5-4.5-.068-.076a1 1 0 0 1 .068-1.338zM16.793 6.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 .067 1.34l-.067.074-4.5 4.5a1 1 0 0 1-1.414-1.414L20.586 12l-3.793-3.793a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowLeftRightIconLinetone.displayName = "ArrowLeftRightIconLinetone";
export { ArrowLeftRightIconLinetone };
