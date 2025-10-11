import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIcon = memo(
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
          d="M21.552 6.728a.75.75 0 0 1 1.397.545 11.8 11.8 0 0 1-2.129 3.487l2.317 2.316a.75.75 0 0 1-1.06 1.06l-2.317-2.315a11.7 11.7 0 0 1-4.001 2.312l.847 3.162a.75.75 0 1 1-1.449.388l-.848-3.161a11.8 11.8 0 0 1-4.62 0l-.847 3.16a.75.75 0 0 1-1.45-.387l.848-3.162a11.7 11.7 0 0 1-4-2.312l-2.316 2.316a.75.75 0 0 1-1.06-1.06l2.316-2.318a11.8 11.8 0 0 1-2.128-3.486.75.75 0 1 1 1.396-.545 10.27 10.27 0 0 0 6.877 6.168l.022.005.016.005a10.27 10.27 0 0 0 5.269 0l.02-.005.026-.006c3.15-.85 5.7-3.163 6.874-6.167"
        />
      </svg>
    ))
);
EyeClosedIcon.displayName = "EyeClosedIcon";
export { EyeClosedIcon };
