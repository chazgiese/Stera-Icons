import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CloudIconDuotone = memo(
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
          d="M12 4.25a6.75 6.75 0 0 1 6.165 4.004A5.749 5.749 0 0 1 18 19.75v-1.5a4.25 4.25 0 1 0-.29-8.49.75.75 0 0 1-.757-.5A5.25 5.25 0 0 0 6.75 11l.003.11a.75.75 0 0 1-.938.742A3.25 3.25 0 1 0 5 18.25v1.5a4.75 4.75 0 1 1 .291-9.491A6.75 6.75 0 0 1 12 4.25"
        />
        <path fill="currentColor" d="M18 19.75H5v-1.5h13z" opacity={0.4} />
      </svg>
    ))
);
CloudIconDuotone.displayName = "CloudIconDuotone";
export { CloudIconDuotone };
