import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeIcon = memo(
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
          d="M12 2.25a6.25 6.25 0 0 1 6.25 6.25 6.23 6.23 0 0 1-1.913 4.497l2.43 4.858c.665 1.33-.303 2.895-1.79 2.895H7.024a2 2 0 0 1-1.79-2.895l2.43-4.858A6.25 6.25 0 0 1 12 2.25m0 1.5a4.75 4.75 0 0 0-2.943 8.479.75.75 0 0 1 .206.923l-2.688 5.374a.5.5 0 0 0 .448.724h9.955a.5.5 0 0 0 .447-.724l-2.687-5.374a.75.75 0 0 1 .206-.923A4.75 4.75 0 0 0 12 3.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
KeyholeIcon.displayName = "KeyholeIcon";
export { KeyholeIcon };
