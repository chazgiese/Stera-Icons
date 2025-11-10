import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserIconFilltone = memo(
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
          d="M15.7 12.568c2.05.69 3.66 2 4.554 3.899.117.248.263.55.344.88.09.371.09.732.022 1.14-.066.399-.267.802-.457 1.1-.19.3-.469.654-.802.884-.815.561-1.652.529-2.561.529H7.2c-.909 0-1.746.032-2.561-.53-.333-.229-.612-.583-.802-.882s-.391-.702-.457-1.1a2.8 2.8 0 0 1 .022-1.14c.08-.332.228-.633.344-.881.894-1.899 2.504-3.21 4.553-3.899A5.48 5.48 0 0 0 12 14a5.48 5.48 0 0 0 3.7-1.432"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"
        />
      </svg>
    ))
);
UserIconFilltone.displayName = "UserIconFilltone";
export { UserIconFilltone };
