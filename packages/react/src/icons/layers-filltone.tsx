import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconFilltone = memo(
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
          d="m19.79 12-1.839-.978 2.13-1.133.978.52c1.255.668 1.255 2.514 0 3.182l-.978.52.978.52c1.255.668 1.255 2.513 0 3.181l-6.815 3.625c-1.41.75-3.078.75-4.488 0L2.94 17.812c-1.255-.668-1.255-2.513 0-3.181l.977-.52-.977-.52c-1.255-.668-1.255-2.514 0-3.182l.978-.52 2.13 1.133-1.84.978 6.486 3.45a2.76 2.76 0 0 0 2.61 0zm-5.546 5.216c-1.41.75-3.078.75-4.488 0l-3.708-1.973-1.839.978 6.486 3.45a2.76 2.76 0 0 0 2.61 0l6.485-3.45-1.839-.978z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.756 2.562a4.76 4.76 0 0 1 4.488 0l6.815 3.625c1.255.668 1.255 2.514 0 3.182l-6.815 3.625c-1.41.75-3.078.75-4.488 0L2.94 9.369c-1.255-.668-1.255-2.514 0-3.182z"
        />
      </svg>
    ))
);
LayersIconFilltone.displayName = "LayersIconFilltone";
export { LayersIconFilltone };
