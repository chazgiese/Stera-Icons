import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIcon = memo(
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
          d="M16.875 6.064a.75.75 0 0 1 1.06 1.061l-2.541 2.542a.75.75 0 1 1-1.061-1.06z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.333 3.522a4.345 4.345 0 0 1 6.144 6.145l-3.813 3.813a.75.75 0 0 1-.53.22h-1.08l-.303 1.516a.75.75 0 0 1-.205.383l-1.694 1.695a.75.75 0 0 1-1.061 0L9.778 15.28l-6.248 6.25a.75.75 0 1 1-1.06-1.061l6.248-6.25-2.012-2.011a.75.75 0 0 1 0-1.06l1.695-1.695.083-.072a.75.75 0 0 1 .3-.133l1.516-.304V7.866c0-.199.079-.39.22-.53zm5.084 1.061a2.845 2.845 0 0 0-4.024 0L11.8 8.177V9.56a.75.75 0 0 1-.603.735l-1.896.379-1.003 1.004 4.023 4.023 1.003-1.004.38-1.895.037-.126a.75.75 0 0 1 .698-.477h1.384l3.594-3.594a2.845 2.845 0 0 0 0-4.023"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrewdriverIcon.displayName = "ScrewdriverIcon";
export { ScrewdriverIcon };
