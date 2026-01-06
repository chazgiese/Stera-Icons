import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilRulerIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9.25 19.25h-4.5v-1.5h4.5zM17 16.5a.75.75 0 0 1 0 1.5h-2.25v-1.5zM17 11.75a.75.75 0 0 1 0 1.5h-2.25v-1.5zM17 7a.75.75 0 0 1 0 1.5h-2.25V7zM9.25 7.75h-4.5v-1.5h4.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 1.25a.75.75 0 0 1 .57.262l3 3.5a.75.75 0 0 1 .18.488v15.25a2 2 0 0 1-1.796 1.99l-.204.01h-3.5a2 2 0 0 1-2-2V5.5a.75.75 0 0 1 .18-.488l3-3.5.057-.059A.75.75 0 0 1 7 1.25M4.75 5.777V20.75a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V5.777L7 3.152zM18.75 2.25a2 2 0 0 1 2 2v16.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5v16.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V4.25a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilRulerIconDuotone.displayName = "PencilRulerIconDuotone";
export { PencilRulerIconDuotone };
