import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CapsLockIcon = memo(
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
          d="M14.75 17.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-5.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM10.586 1.854a2 2 0 0 1 2.828 0l8.262 8.263c.788.787.23 2.133-.883 2.133H16.75v2a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-2H3.207c-1.113 0-1.671-1.346-.884-2.133zm1.767 1.06a.5.5 0 0 0-.707 0L3.81 10.75H8a.75.75 0 0 1 .75.75v2.75a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5V11.5a.75.75 0 0 1 .75-.75h4.189z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CapsLockIcon.displayName = "CapsLockIcon";
export { CapsLockIcon };
