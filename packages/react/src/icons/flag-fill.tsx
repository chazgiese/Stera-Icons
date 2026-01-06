import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconFill = memo(
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
          d="M6.012 2.023c1.514-.118 2.638-.038 3.563.175 1.06.244 1.804.652 2.46.997.647.34 1.249.642 2.153.838.918.199 2.2.297 4.175.138l.157-.004c.784.02 1.48.649 1.48 1.503v8.918c0 .784-.607 1.42-1.363 1.491-2.178.202-3.706.115-4.897-.143-1.204-.26-2.01-.687-2.705-1.058-.682-.364-1.23-.659-2.049-.832-.69-.146-1.616-.212-2.986-.094V21a1 1 0 0 1-2 0V3.574a1.5 1.5 0 0 1 1.338-1.487z"
        />
      </svg>
    ))
);
FlagIconFill.displayName = "FlagIconFill";
export { FlagIconFill };
