import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIconDuotone = memo(
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
          d="M9.553 12.384a.75.75 0 0 1 1.061 1.06l-4.142 4.143c-.19.188-.641.752-1.118 1.473-.475.719-.923 1.52-1.142 2.177a.75.75 0 0 1-1.424-.474c.28-.843.814-1.774 1.314-2.53.499-.755 1.017-1.415 1.31-1.707z"
        />
        <path
          fill="currentColor"
          d="M20.75 3c0 4.037-.378 6.856-1.194 9.092-.825 2.255-2.076 3.86-3.712 5.497a7.376 7.376 0 0 1-9.827.54c.198-.257.36-.447.455-.542l.564-.564a5.88 5.88 0 0 0 7.747-.495c1.55-1.549 2.642-2.974 3.364-4.95C18.83 9.71 19.2 7.3 19.245 3.754c-4.01.056-6.566.56-8.394 1.311-1.924.79-3.103 1.874-4.38 3.15a5.876 5.876 0 0 0-.495 7.746l-.564.564a7 7 0 0 0-.47.546 7.376 7.376 0 0 1 .47-9.916c1.31-1.311 2.66-2.57 4.87-3.477 2.19-.9 5.167-1.429 9.718-1.429h.75z"
          opacity={0.4}
        />
      </svg>
    ))
);
LeafIconDuotone.displayName = "LeafIconDuotone";
export { LeafIconDuotone };
