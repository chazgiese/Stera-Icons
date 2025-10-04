import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PawPrintFilled = memo(
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
          d="M12 9.75c1.229 0 2.1.318 2.743.88.61.532.942 1.229 1.203 1.762.093.189.278.44.56.78.253.305.614.714.92 1.095.607.755 1.324 1.776 1.324 2.9 0 .99-.323 2.005-1.003 2.784-.693.794-1.72 1.299-3.02 1.299-.684 0-1.252-.15-1.704-.278-.486-.139-.759-.222-1.023-.222s-.537.084-1.023.222c-.452.128-1.02.278-1.705.278-1.299 0-2.326-.505-3.02-1.299-.68-.78-1.002-1.795-1.002-2.784 0-1.124.717-2.145 1.324-2.9.306-.381.667-.79.92-1.095.282-.34.467-.591.56-.78.261-.533.594-1.23 1.203-1.762.643-.562 1.514-.88 2.743-.88M4 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M8.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M15.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
        />
      </svg>
    ))
);
PawPrintFilled.displayName = "PawPrintFilled";
export { PawPrintFilled };
