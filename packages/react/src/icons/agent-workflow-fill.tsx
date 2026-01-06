import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AgentWorkflowIconFill = memo(
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
          d="M6 11a1 1 0 1 1 0 2 2 2 0 0 0-2 2v.25a2.25 2.25 0 0 0 2.25 2.25H17v-2a1 1 0 0 1 1.707-.707l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 17 21.5v-2H6.25A4.25 4.25 0 0 1 2 15.25V15a4 4 0 0 1 4-4"
        />
        <path
          fill="currentColor"
          d="M11.528 8.352a.5.5 0 0 1 .944 0l.186.532a4 4 0 0 0 2.458 2.458l.532.186a.5.5 0 0 1 0 .944l-.532.186a4 4 0 0 0-2.458 2.458l-.186.532a.5.5 0 0 1-.944 0l-.186-.532a4 4 0 0 0-2.458-2.458l-.532-.186a.5.5 0 0 1 0-.944l.532-.186a4 4 0 0 0 2.458-2.458z"
        />
        <path
          fill="currentColor"
          d="M5.5 2a3.5 3.5 0 0 1 3.354 2.5h8.896A4.25 4.25 0 0 1 22 8.75V9a4 4 0 0 1-4 4 1 1 0 1 1 0-2 2 2 0 0 0 2-2v-.25a2.25 2.25 0 0 0-2.25-2.25H8.854A3.501 3.501 0 1 1 5.5 2"
        />
      </svg>
    ))
);
AgentWorkflowIconFill.displayName = "AgentWorkflowIconFill";
export { AgentWorkflowIconFill };
