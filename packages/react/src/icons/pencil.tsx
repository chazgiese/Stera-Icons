import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilIcon = memo(
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
          d="M16.586 1.854a2 2 0 0 1 2.828 0l2.733 2.732a2 2 0 0 1 0 2.828L8.53 21.03a.75.75 0 0 1-.456.215l-5 .5a.75.75 0 0 1-.82-.82l.5-5 .024-.127a.75.75 0 0 1 .192-.329zM4.22 16.34l-.382 3.821 3.821-.381 9.78-9.78L14 6.56zM18.354 2.914a.5.5 0 0 0-.707 0L15.06 5.5l3.44 3.44 2.586-2.585a.5.5 0 0 0 0-.707z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilIcon.displayName = "PencilIcon";
export { PencilIcon };
