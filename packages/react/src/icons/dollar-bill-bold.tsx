import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DollarBillIconBold = memo(
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
          d="M12 8c2.096 0 3.5 1.97 3.5 4s-1.404 4-3.5 4-3.5-1.97-3.5-4S9.904 8 12 8m0 2c-.665 0-1.5.717-1.5 2s.835 2 1.5 2 1.5-.717 1.5-2-.835-2-1.5-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.154 5.004A3 3 0 0 1 23 8v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16zM3 16a1 1 0 0 0 1 1h.946c-.09-.768-.288-1.178-.528-1.418s-.65-.44-1.418-.53zm18-.947c-.768.09-1.178.289-1.418.529s-.438.65-.528 1.418H20a1 1 0 0 0 1-1zM6.958 7c-.101 1.133-.408 2.114-1.126 2.832S4.133 10.857 3 10.958v2.083c1.134.101 2.114.41 2.832 1.127S6.857 15.867 6.958 17h10.084c.101-1.133.408-2.114 1.126-2.832s1.698-1.026 2.832-1.127v-2.083c-1.134-.101-2.114-.408-2.832-1.126S17.143 8.133 17.042 7zM4 7a1 1 0 0 0-1 1v.946c.768-.09 1.178-.288 1.418-.528s.438-.65.528-1.418zm15.054 0c.09.768.288 1.178.528 1.418s.65.438 1.418.528V8a1 1 0 0 0-.898-.995L20 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DollarBillIconBold.displayName = "DollarBillIconBold";
export { DollarBillIconBold };
