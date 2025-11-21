import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilLineIcon = memo(
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
          d="M16.585 1.854a2 2 0 0 1 2.828 0l2.733 2.732a2 2 0 0 1 0 2.828L9.309 20.25H21a.75.75 0 0 1 0 1.5H3a.8.8 0 0 1-.275-.054l-.033-.014a.76.76 0 0 1-.306-.253l-.013-.017a1 1 0 0 1-.057-.106l-.012-.03a.75.75 0 0 1-.05-.35l.5-5 .023-.128a.75.75 0 0 1 .192-.329zM4.218 16.34l-.382 3.822 3.822-.382 9.78-9.78-3.44-3.44zM18.353 2.914a.5.5 0 0 0-.707 0L15.059 5.5l3.44 3.44 2.586-2.585a.5.5 0 0 0 0-.707z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilLineIcon.displayName = "PencilLineIcon";
export { PencilLineIcon };
