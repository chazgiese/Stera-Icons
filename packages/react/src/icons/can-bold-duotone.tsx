import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanIconBoldDuotone = memo(
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
          d="M18.078 4.62A7 7 0 0 1 19 8.094v7.812a7 7 0 0 1-.922 3.474l-.634 1.108A3 3 0 0 1 14.84 22H9.16a3 3 0 0 1-2.604-1.512l-.634-1.108A7 7 0 0 1 5 15.906V8.094c0-1.218.318-2.416.922-3.474l.367-.643q.102.022.211.023h2.08l-.92 1.612A5 5 0 0 0 7 8.094v7.812c0 .87.227 1.726.66 2.482l.632 1.108A1 1 0 0 0 9.16 20h5.68a1 1 0 0 0 .868-.504l.633-1.108c.431-.756.659-1.612.659-2.482V8.094c0-.87-.227-1.726-.66-2.482L15.42 4h2.08q.108-.001.21-.023z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.5 2a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
CanIconBoldDuotone.displayName = "CanIconBoldDuotone";
export { CanIconBoldDuotone };
