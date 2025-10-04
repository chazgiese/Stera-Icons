import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RulersBold = memo(
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
          d="M19.75 2A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10H10v9.75A2.25 2.25 0 0 1 7.75 22h-3.5A2.25 2.25 0 0 1 2 19.75V4.25A2.25 2.25 0 0 1 4.25 2zM4 19.75c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V18H7a1 1 0 1 1 0-2h1v-2H7a1 1 0 1 1 0-2h1v-2H4zm.2-15.745a.25.25 0 0 0-.157.105.25.25 0 0 0-.043.14V8h4V4H4.25a.3.3 0 0 0-.05.005M10 8h2V7a1 1 0 1 1 2 0v1h2V7a1 1 0 1 1 2 0v1h1.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H10z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RulersBold.displayName = "RulersBold";
export { RulersBold };
