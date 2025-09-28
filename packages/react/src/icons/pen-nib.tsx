import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PenNib = memo(
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
          d="M14 1.25a.75.75 0 0 1 .6.3c2.266 3.023 4.64 6.858 5.646 10.236.501 1.685.692 3.35.27 4.772-.396 1.327-1.303 2.356-2.766 2.964v1.228a2 2 0 0 1-2 2H8.249a2 2 0 0 1-2-2v-1.229c-1.464-.607-2.371-1.636-2.766-2.963-.423-1.421-.232-3.087.27-4.772C4.757 8.408 7.131 4.573 9.398 1.55a.75.75 0 0 1 .6-.3zm-3.624 1.5C8.22 5.67 6.088 9.196 5.19 12.214c-.466 1.565-.572 2.9-.27 3.916.286.959.96 1.724 2.307 2.156.31.1.522.388.522.714v1.75a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5V19a.75.75 0 0 1 .522-.714c1.347-.432 2.021-1.197 2.307-2.156.302-1.017.196-2.351-.27-3.916-.898-3.018-3.029-6.543-5.186-9.464h-.873v8.13a2.248 2.248 0 0 1-.75 4.37 2.249 2.249 0 0 1-.75-4.37V2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PenNib.displayName = "PenNib";
export { PenNib };
