import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilIconDuotone = memo(
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
          d="M16.586 1.854a2 2 0 0 1 2.828 0l2.732 2.732a2 2 0 0 1 0 2.828L18.5 11.061 12.94 5.5zm1.768 1.06a.5.5 0 0 0-.707 0L15.06 5.5 18.5 8.94l2.586-2.586a.5.5 0 0 0 0-.707z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.94 5.5 14 6.56l-9.781 9.78-.382 3.821 3.821-.382 9.78-9.78L18.5 11.06l-9.97 9.97a.75.75 0 0 1-.456.215l-5 .5a.75.75 0 0 1-.82-.82l.5-5 .024-.127a.75.75 0 0 1 .192-.33z"
        />
      </svg>
    ))
);
PencilIconDuotone.displayName = "PencilIconDuotone";
export { PencilIconDuotone };
