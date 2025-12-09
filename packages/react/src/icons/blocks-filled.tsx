import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BlocksIconFilled = memo(
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
          d="M8.75 6A2.25 2.25 0 0 1 11 8.25V13h4.75A2.25 2.25 0 0 1 18 15.25v4.5A2.25 2.25 0 0 1 15.75 22H4.25A2.25 2.25 0 0 1 2 19.75V8.25A2.25 2.25 0 0 1 4.25 6zM4 19.75c0 .138.112.25.25.25H9v-5H4zm7 .25h4.75a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25H11zM4.25 8a.25.25 0 0 0-.25.25V13h5V8.25A.25.25 0 0 0 8.75 8z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2z"
        />
      </svg>
    ))
);
BlocksIconFilled.displayName = "BlocksIconFilled";
export { BlocksIconFilled };
