import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeLines100PercentIcon = memo(
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
          d="M12 2.714c5.937 0 10.75 4.813 10.75 10.75 0 2.968-1.204 5.657-3.148 7.601a.75.75 0 0 1-1.061-1.06 9.2 9.2 0 0 0 2.676-5.791H19a.75.75 0 0 1 0-1.5h2.217a9.2 9.2 0 0 0-2.17-5.24l-1.57 1.572a.75.75 0 0 1-1.061-1.06l1.57-1.572a9.2 9.2 0 0 0-5.231-2.167V6.47a.75.75 0 0 1-1.5 0V4.246a9.2 9.2 0 0 0-5.241 2.168l1.57 1.571a.75.75 0 0 1-1.06 1.06l-1.572-1.57a9.2 9.2 0 0 0-2.169 5.239H5a.75.75 0 0 1 0 1.5H2.783c.16 1.99.947 3.8 2.167 5.236l1.567-1.565a.75.75 0 1 1 1.06 1.06L5.48 21.042l-.02.023a.75.75 0 0 1-1.121-.063 10.72 10.72 0 0 1-3.088-7.538c0-5.937 4.813-10.75 10.75-10.75"
        />
        <path
          fill="currentColor"
          d="M10.763 12.227a1.75 1.75 0 0 1 2.474 0l.04.042c.323.376 1.405 1.82 2.38 3.131l1.318 1.783.42.572.119.158.038.052.002.004.071.117a.75.75 0 0 1-1.12.932v-.001l-.003-.002-.052-.038-.159-.118-.571-.42c-.476-.352-1.12-.826-1.783-1.32-1.312-.974-2.756-2.056-3.132-2.379l-.042-.039a1.75 1.75 0 0 1 0-2.474"
        />
      </svg>
    ))
);
GaugeLines100PercentIcon.displayName = "GaugeLines100PercentIcon";
export { GaugeLines100PercentIcon };
