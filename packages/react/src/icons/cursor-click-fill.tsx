import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorClickIconFill = memo(
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
          d="M8.092 10.32c-.459-1.377.851-2.687 2.228-2.228l10.475 3.49c1.637.547 1.595 2.876-.06 3.363l-4.474 1.316-1.316 4.474c-.487 1.655-2.816 1.697-3.362.06zM4.293 12.293a1 1 0 0 1 1.414 1.414L4.293 15.12a1 1 0 1 1-1.414-1.414zM1.272 6.93a1 1 0 0 1 1.226-.706l1.932.517a1 1 0 0 1-.518 1.932L1.98 8.155a1 1 0 0 1-.708-1.224M13.707 2.879a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zM6.93 1.272a1 1 0 0 1 1.224.707l.518 1.932a1 1 0 1 1-1.932.518l-.517-1.932a1 1 0 0 1 .707-1.225"
        />
      </svg>
    ))
);
CursorClickIconFill.displayName = "CursorClickIconFill";
export { CursorClickIconFill };
