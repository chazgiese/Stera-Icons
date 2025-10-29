import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconLinetone = memo(
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
          <path d="m4 12.12 2 1V22a1 1 0 0 1-2 0zM20 22a1 1 0 1 1-2 0v-8.88l2-1zM20 12.03v.001l-.001-.008zM8.021 5.486l.743.62c.27.224.56.415.861.575L6.421 10.8q-.08.106-.147.22l-1.79-.896q-.026.048-.05.098.172-.343.409-.65zM19.157 9.573q.237.307.408.65-.023-.05-.048-.098l-1.792.896a2 2 0 0 0-.146-.22l-3.205-4.12q.454-.239.861-.576l.744-.619z" />
        </g>
        <path
          fill="currentColor"
          d="M19.517 10.125A4 4 0 0 1 20 12.031v.088l-2 1-.658.33a3 3 0 0 1-2.684 0L13 12.62v9.382a1 1 0 0 1-2 0V12.62l-1.658.83a3 3 0 0 1-2.684 0L4 12.12v-.089c0-.669.168-1.324.483-1.906l3.07 1.535c.281.14.613.14.894 0l2.211-1.105a3 3 0 0 1 2.684 0l2.21 1.105c.282.14.614.14.895 0zM12 1a1 1 0 0 1 .79.386l3.189 4.1-.744.62a5.08 5.08 0 0 1-6.471 0l-.743-.62 3.19-4.1.075-.086A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
PencilTipIconLinetone.displayName = "PencilTipIconLinetone";
export { PencilTipIconLinetone };
