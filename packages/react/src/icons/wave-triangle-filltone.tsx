import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveTriangleIconFilltone = memo(
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
          d="M20.676 11.296a1.5 1.5 0 0 1 2.648 1.408l-3.895 7.332-.103.177c-1.069 1.71-3.583 1.71-4.652 0l-.103-.177-3.895-7.332 2.648-1.408L17 18.214z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.673 3.784c1.07-1.711 3.586-1.711 4.655 0l.101.177 3.897 7.335-2.65 1.407L7 5.783l-3.675 6.92a1.5 1.5 0 0 1-2.65-1.407L4.571 3.96z"
        />
      </svg>
    ))
);
WaveTriangleIconFilltone.displayName = "WaveTriangleIconFilltone";
export { WaveTriangleIconFilltone };
