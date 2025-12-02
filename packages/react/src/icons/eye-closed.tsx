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
          d="M21.552 6.728a.75.75 0 0 1 1.397.545 11.8 11.8 0 0 1-2.129 3.486l2.317 2.316a.75.75 0 0 1-1.06 1.06L19.76 11.82a11.7 11.7 0 0 1-4.002 2.313l.847 3.161a.75.75 0 0 1-1.449.389l-.848-3.161a11.8 11.8 0 0 1-4.62 0l-.847 3.16a.75.75 0 1 1-1.45-.388l.848-3.161a11.7 11.7 0 0 1-4.002-2.312l-2.314 2.315a.75.75 0 0 1-1.06-1.06l2.315-2.317a11.8 11.8 0 0 1-2.127-3.486.75.75 0 1 1 1.396-.545 10.27 10.27 0 0 0 6.87 6.166l.029.007.016.005a10.27 10.27 0 0 0 5.269 0l.02-.005.035-.008a10.27 10.27 0 0 0 6.865-6.165"
        />
      </svg>
    ))
);
EyeClosedIcon.displayName = "EyeClosedIcon";
export { EyeClosedIcon };
