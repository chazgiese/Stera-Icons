import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AtSignIconFillDuotone = memo(
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
          d="M12 .5C18.351.5 23.5 5.649 23.5 12q0 .58-.057 1.148c-.286 2.884-2.046 4.885-4.322 5.07a1.5 1.5 0 0 0-.242-2.99c.44-.036 1.393-.507 1.579-2.376q.042-.42.042-.852a8.5 8.5 0 1 0-4.251 7.363 1.5 1.5 0 0 1 1.502 2.598A11.45 11.45 0 0 1 12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 6.5A1.5 1.5 0 0 1 17.5 8v5c0 1.012.29 1.586.55 1.873.254.281.551.377.829.354a1.5 1.5 0 1 1 .242 2.99c-1.221.1-2.424-.369-3.295-1.33a4.5 4.5 0 0 1-.432-.562 5.5 5.5 0 1 1-.674-9.105c.263-.432.738-.72 1.28-.72m-4 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AtSignIconFillDuotone.displayName = "AtSignIconFillDuotone";
export { AtSignIconFillDuotone };
