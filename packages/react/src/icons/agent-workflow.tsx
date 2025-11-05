import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AgentWorkflowIcon = memo(
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
          d="M6 11.25a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 0 3.75 15v.25a2.5 2.5 0 0 0 2.5 2.5h12.94l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.741.741 0 0 1 .116.903.7.7 0 0 1-.116.157l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6.25a4 4 0 0 1-4-4V15A3.75 3.75 0 0 1 6 11.25"
        />
        <path
          fill="currentColor"
          d="M11.528 8.352a.5.5 0 0 1 .944 0l.186.532a4 4 0 0 0 2.458 2.458l.532.186a.5.5 0 0 1 0 .944l-.532.186a4 4 0 0 0-2.458 2.458l-.186.532a.5.5 0 0 1-.944 0l-.186-.532a4 4 0 0 0-2.458-2.458l-.532-.186a.5.5 0 0 1 0-.944l.532-.186a4 4 0 0 0 2.458-2.458z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 2.25a3.25 3.25 0 0 1 3.162 2.5h9.088a4 4 0 0 1 4 4V9A3.75 3.75 0 0 1 18 12.75a.75.75 0 0 1 0-1.5A2.25 2.25 0 0 0 20.25 9v-.25a2.5 2.5 0 0 0-2.5-2.5H8.662a3.25 3.25 0 1 1-3.162-4m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AgentWorkflowIcon.displayName = "AgentWorkflowIcon";
export { AgentWorkflowIcon };
