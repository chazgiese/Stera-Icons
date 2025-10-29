import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconFilltone = memo(
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
          <path d="m4 12.12 2.658 1.33c.845.421 1.84.421 2.684 0L11 12.62V23H6a2 2 0 0 1-2-2zM20 21a2 2 0 0 1-2 2h-5V12.62l1.658.83c.845.421 1.84.421 2.684 0l.658-.33 2-1zM20 12.03v.001l-.001-.008zM19.157 9.573q.237.307.408.65-.023-.05-.048-.098l-3.07 1.535c-.281.14-.613.14-.894 0l-2.211-1.105a3 3 0 0 0-2.684 0l-2.21 1.105c-.282.14-.614.14-.895 0l-3.07-1.535-.05.098q.173-.343.41-.65L8.02 5.486l.743.62a5.08 5.08 0 0 0 6.471 0l.744-.62z" />
        </g>
        <path
          fill="currentColor"
          d="M19.517 10.125A4 4 0 0 1 20 12.031v.088l-2 1-.658.33a3 3 0 0 1-2.684 0L13 12.62V23h-2V12.62l-1.658.83a3 3 0 0 1-2.684 0L4 12.12v-.089c0-.669.168-1.324.483-1.906l3.07 1.535c.281.14.613.14.894 0l2.211-1.105a3 3 0 0 1 2.684 0l2.21 1.105c.282.14.614.14.895 0zM12 1a1 1 0 0 1 .79.386l3.189 4.1-.744.62a5.08 5.08 0 0 1-6.471 0l-.743-.62 3.19-4.1.075-.086A1 1 0 0 1 12 1"
        />
      </svg>
    ))
);
PencilTipIconFilltone.displayName = "PencilTipIconFilltone";
export { PencilTipIconFilltone };
