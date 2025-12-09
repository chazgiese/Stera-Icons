import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrewdriverIconFilled = memo(
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
          d="M14.332 3.522a4.345 4.345 0 0 1 6.145 6.145l-3.813 3.813a.75.75 0 0 1-.53.22h-1.08l-.303 1.516a.75.75 0 0 1-.205.383l-1.695 1.695a.75.75 0 0 1-1.06 0l-1.836-1.836-6.248 6.249a1 1 0 0 1-1.414-1.415l6.247-6.248-1.834-1.835a.75.75 0 0 1 0-1.06l1.695-1.695.084-.072a.75.75 0 0 1 .3-.133l1.515-.304V7.866a.75.75 0 0 1 .22-.53zm3.78 2.366a1 1 0 0 0-1.413 0L14.157 8.43a1 1 0 1 0 1.414 1.414l2.542-2.542a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrewdriverIconFilled.displayName = "ScrewdriverIconFilled";
export { ScrewdriverIconFilled };
