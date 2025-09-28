import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenNibBold = memo(
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
          d="M14.117 1.007a1 1 0 0 1 .682.393c2.273 3.031 4.668 6.894 5.687 10.315.507 1.705.711 3.425.268 4.914-.404 1.358-1.316 2.415-2.755 3.057v1.064A2.25 2.25 0 0 1 15.75 23h-7.5a2.25 2.25 0 0 1-2.25-2.25v-1.064c-1.44-.642-2.351-1.7-2.755-3.057-.443-1.489-.24-3.21.268-4.914C4.53 8.295 6.926 4.43 9.2 1.4a1 1 0 0 1 .682-.393L9.998 1H14zM10.502 3C8.377 5.892 6.305 9.343 5.43 12.285c-.46 1.545-.55 2.825-.268 3.774.26.872.867 1.58 2.143 1.989a1 1 0 0 1 .694.952v1.75c0 .138.112.25.25.25h7.501a.25.25 0 0 0 .25-.25V19a1 1 0 0 1 .695-.952c1.276-.41 1.884-1.117 2.143-1.99.283-.948.192-2.228-.268-3.773C17.693 9.343 15.62 5.892 13.496 3h-.497v7.709a2.5 2.5 0 1 1-2 0V3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PenNibBold.displayName = "PenNibBold";
export { PenNibBold };
