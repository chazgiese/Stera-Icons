import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReplyIconFilltone = memo(
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
          d="M10 9.5a1 1 0 0 0 1 1c3.734 0 5.878.517 7.136 1.674.832.765 1.388 1.921 1.663 3.73C18.384 14.671 16.187 13.5 13 13.5h-2a1 1 0 0 0-1 1v3.086L4.414 12 10 6.414z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.293 3.293A1 1 0 0 1 12 4v4.514c3.274.085 5.79.625 7.49 2.187C21.381 12.442 22 15.201 22 19a1 1 0 0 1-1.914.406l-.008-.017-.055-.108a6 6 0 0 0-.261-.43 7.3 7.3 0 0 0-1.18-1.358C17.49 16.512 15.721 15.5 13 15.5h-1V20a1 1 0 0 1-1.707.707l-8-8a1 1 0 0 1 0-1.414zM4.414 12 10 17.586V14.5a1 1 0 0 1 1-1h2c3.187 0 5.384 1.172 6.799 2.403-.275-1.808-.831-2.964-1.663-3.73C16.878 11.018 14.735 10.5 11 10.5a1 1 0 0 1-1-1V6.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ReplyIconFilltone.displayName = "ReplyIconFilltone";
export { ReplyIconFilltone };
