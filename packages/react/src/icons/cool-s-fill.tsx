import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoolSIconFill = memo(
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
          d="M11.4 1.45a1 1 0 0 1 1.2 0l5 3.75c.251.188.4.486.4.8v2.307a1 1 0 0 1-1 1h-3.217c-.25 0-.491-.094-.676-.263l-.283-.26a1 1 0 0 1-.324-.737V6.51a.5.5 0 0 0-1 0v2.198a.5.5 0 0 0 .162.368l5.983 5.046a1 1 0 0 1 .355.765V18a1 1 0 0 1-.4.8l-5 3.75a1 1 0 0 1-1.2 0l-5-3.75A1 1 0 0 1 6 18v-2.297a1 1 0 0 1 1-1h3.217a1 1 0 0 1 .675.262l.283.259c.207.19.325.458.325.738V17.5a.5.5 0 0 0 1 0v-2.198a.5.5 0 0 0-.162-.368L6.355 9.887A1 1 0 0 1 6 9.122V6c0-.314.149-.612.4-.8z"
        />
      </svg>
    ))
);
CoolSIconFill.displayName = "CoolSIconFill";
export { CoolSIconFill };
