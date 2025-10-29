import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIconFilltone = memo(
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
          <path d="M6.708 13.5a5.51 5.51 0 0 0 3.792 3.791v3.074A8.5 8.5 0 0 1 3.635 13.5zM20.365 13.5a8.5 8.5 0 0 1-6.865 6.865v-3.074a5.51 5.51 0 0 0 3.792-3.791zM13.5 3.634a8.5 8.5 0 0 1 6.865 6.866h-3.073A5.51 5.51 0 0 0 13.5 6.708zM10.5 6.708A5.51 5.51 0 0 0 6.708 10.5H3.635A8.5 8.5 0 0 1 10.5 3.634z" />
        </g>
        <path
          fill="currentColor"
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v8.5H22a1.5 1.5 0 0 1 0 3h-8.5V22a1.5 1.5 0 0 1-3 0v-8.5H2a1.5 1.5 0 0 1 0-3h8.5V2A1.5 1.5 0 0 1 12 .5"
        />
      </svg>
    ))
);
CrosshairIconFilltone.displayName = "CrosshairIconFilltone";
export { CrosshairIconFilltone };
