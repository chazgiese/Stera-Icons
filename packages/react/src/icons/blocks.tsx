import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BlocksIcon = memo(
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
          d="M8.75 6.25a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2V8.25a2 2 0 0 1 2-2zm-5 13.5a.5.5 0 0 0 .5.5h5v-5.5h-5.5zm7 .5h5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5h-5zm-6.5-12.5a.5.5 0 0 0-.5.5v5h5.5v-5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5a2 2 0 0 1 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BlocksIcon.displayName = "BlocksIcon";
export { BlocksIcon };
