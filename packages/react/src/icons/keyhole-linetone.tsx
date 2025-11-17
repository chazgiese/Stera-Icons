import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeIconLinetone = memo(
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
          d="M18.99 17.743C19.738 19.24 18.65 21 16.977 21H7.022c-1.672 0-2.76-1.761-2.012-3.257l2.347-4.696q.29.296.614.555a1 1 0 0 0 1.51-.329l-2.682 5.365a.25.25 0 0 0 .223.362h9.955a.25.25 0 0 0 .224-.362l-2.683-5.365a.997.997 0 0 0 1.51.329q.325-.259.613-.555z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2a6.5 6.5 0 0 1 4.028 11.602 1 1 0 0 1-1.24-1.57 4.5 4.5 0 1 0-5.576 0 1 1 0 0 1-1.24 1.57A6.5 6.5 0 0 1 12 2"
        />
      </svg>
    ))
);
KeyholeIconLinetone.displayName = "KeyholeIconLinetone";
export { KeyholeIconLinetone };
