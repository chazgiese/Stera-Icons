import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconLinetone = memo(
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
          d="M21.059 10.41c1.255.667 1.255 2.513 0 3.18l-.977.52.977.52c1.255.668 1.255 2.513 0 3.181l-6.815 3.625c-1.41.75-3.078.75-4.488 0L2.94 17.812c-1.255-.668-1.255-2.513 0-3.181l.977-.52-.977-.52c-1.255-.667-1.255-2.513 0-3.18l.978-.521 2.13 1.133-1.84.978 6.486 3.45a2.76 2.76 0 0 0 2.61 0L19.79 12l-1.839-.979 2.13-1.132zm-3.107 4.833-3.708 1.973c-1.41.75-3.078.75-4.488 0l-3.71-1.973-1.837.978 6.486 3.45a2.76 2.76 0 0 0 2.61 0l6.485-3.45z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.756 2.562a4.76 4.76 0 0 1 4.488 0l6.815 3.625c1.255.668 1.255 2.514 0 3.182l-6.815 3.625c-1.41.75-3.078.75-4.488 0L2.94 9.369c-1.255-.668-1.255-2.514 0-3.182zm3.549 1.766a2.76 2.76 0 0 0-2.61 0L4.21 7.778l6.486 3.45a2.76 2.76 0 0 0 2.61 0l6.485-3.45z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIconLinetone.displayName = "LayersIconLinetone";
export { LayersIconLinetone };
