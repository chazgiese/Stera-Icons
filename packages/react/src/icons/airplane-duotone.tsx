import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIconDuotone = memo(
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
          <path d="M14.376 13.583A.75.75 0 0 0 15 14.75h.386l-4.177 5.849a2.75 2.75 0 0 1-2.238 1.151H7.759a1.25 1.25 0 0 1-1.15-1.742l2.27-5.295 1.096.037a.75.75 0 0 0 .715-.454L8.138 20.25h.833c.404 0 .783-.195 1.018-.523zM8.97 2.25c.889 0 1.723.429 2.24 1.151l4.176 5.849H15a.75.75 0 0 0-.61 1.185L9.989 4.273A1.25 1.25 0 0 0 8.97 3.75h-.833l2.552 5.954q.02.052.034.106a.75.75 0 0 0-.75-.559l-1.096.036L6.61 3.992A1.25 1.25 0 0 1 7.759 2.25z" />
        </g>
        <path
          fill="currentColor"
          d="M3.269 6.749c.721 0 1.388.387 1.744 1.016l.917 1.62 4.045-.134a.75.75 0 0 1 .05 1.499l-4.5.15a.75.75 0 0 1-.678-.38l-1.14-2.017a.5.5 0 0 0-.436-.254h-.433l.407 3.669a1 1 0 0 1 .005.098q-.001.03-.005.063l-.407 3.671h.434a.5.5 0 0 0 .434-.253l1.142-2.016a.75.75 0 0 1 .677-.38l4.5.15a.75.75 0 1 1-.05 1.499l-4.045-.136-.918 1.621a2 2 0 0 1-1.74 1.015h-.713a1.25 1.25 0 0 1-1.243-1.388l.43-3.864-.43-3.86a1.25 1.25 0 0 1 1.24-1.388zM18.757 9.25a3.75 3.75 0 0 1 2.652 1.1l1.121 1.123.094.114a.75.75 0 0 1-.094.946l-1.122 1.12a3.75 3.75 0 0 1-2.65 1.097H15a.75.75 0 0 1 0-1.5h3.758c.596 0 1.169-.237 1.59-.658L20.94 12l-.59-.59a2.25 2.25 0 0 0-1.592-.661H15a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
AirplaneIconDuotone.displayName = "AirplaneIconDuotone";
export { AirplaneIconDuotone };
