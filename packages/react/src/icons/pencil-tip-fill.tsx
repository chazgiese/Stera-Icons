import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconFill = memo(
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
          d="M12 1a1 1 0 0 1 .79.386l6.367 8.187c.546.702.843 1.567.843 2.456V22a.999.999 0 0 1-1 1.001h-6V12.723l-.504-.288a1 1 0 0 0-.992 0l-.504.288V23H5A1 1 0 0 1 4 22v-9.97c0-.89.297-1.755.843-2.457l6.368-8.187.075-.086A1 1 0 0 1 12 1m2.033 5.242a3.83 3.83 0 0 1-4.067 0l-3.47 4.461 1.508.862a1 1 0 0 0 .992 0l1.516-.866a3 3 0 0 1 2.976 0l1.516.866a1 1 0 0 0 .992 0l1.506-.862z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilTipIconFill.displayName = "PencilTipIconFill";
export { PencilTipIconFill };
