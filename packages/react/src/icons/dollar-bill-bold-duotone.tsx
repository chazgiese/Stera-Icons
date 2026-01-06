import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DollarBillIconBoldDuotone = memo(
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
          d="M20.154 5.004A3 3 0 0 1 23 8v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16zM4 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-.898-.995L20 7z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3 13.041c1.134.101 2.114.41 2.832 1.127S6.858 15.867 6.959 17h-2.01c-.09-.768-.29-1.178-.531-1.418-.24-.24-.65-.44-1.418-.53zM21 15.052c-.768.09-1.178.29-1.418.53s-.44.65-.53 1.418H17.04c.101-1.133.41-2.114 1.127-2.832s1.698-1.026 2.832-1.127z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 8c2.096 0 3.5 1.97 3.5 4s-1.404 4-3.5 4-3.5-1.97-3.5-4S9.904 8 12 8m0 2c-.665 0-1.5.717-1.5 2s.835 2 1.5 2 1.5-.717 1.5-2-.835-2-1.5-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6.959 7c-.101 1.134-.41 2.114-1.127 2.832S4.134 10.858 3 10.959v-2.01c.768-.09 1.178-.29 1.418-.531.24-.24.44-.65.53-1.418zM19.052 7c.09.768.29 1.178.53 1.418s.65.44 1.418.53v2.011c-1.134-.101-2.114-.41-2.832-1.127S17.142 8.134 17.041 7z"
        />
      </svg>
    ))
);
DollarBillIconBoldDuotone.displayName = "DollarBillIconBoldDuotone";
export { DollarBillIconBoldDuotone };
