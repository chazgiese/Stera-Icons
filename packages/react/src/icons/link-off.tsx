import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LinkOffIcon = memo(
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
          d="M6.233 10.637a.751.751 0 0 1 1.062 1.06l-1.508 1.508a3.541 3.541 0 0 0 5.008 5.008l1.508-1.508a.75.75 0 0 1 1.06 1.062l-1.507 1.506a5.042 5.042 0 0 1-7.13-7.13zM4.358 4.358a.75.75 0 0 1 1.06 0L19.643 18.58a.751.751 0 0 1-1.062 1.062L4.358 5.419a.75.75 0 0 1 0-1.06M12.144 4.727a5.042 5.042 0 0 1 7.13 7.13l-1.507 1.506a.751.751 0 0 1-1.062-1.06l1.508-1.508a3.541 3.541 0 0 0-5.008-5.008l-1.508 1.508a.75.75 0 0 1-1.06-1.062z"
        />
      </svg>
    ))
);
LinkOffIcon.displayName = "LinkOffIcon";
export { LinkOffIcon };
