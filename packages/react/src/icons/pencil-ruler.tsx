import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilRulerIcon = memo(
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
          d="M7 1.25a.75.75 0 0 1 .57.262l3 3.5a.75.75 0 0 1 .18.488v15.25a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V5.5a.75.75 0 0 1 .18-.488l3-3.5A.75.75 0 0 1 7 1.25m-2.25 18v1.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5v-1.5zm0-1.5h4.5v-10h-4.5zm0-11.972v.472h4.5v-.472L7 3.153zM18.75 2.25a2 2 0 0 1 2 2v16.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25a2 2 0 0 1 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5V7H17a.75.75 0 0 1 0 1.5h-2.25v3.25H17a.75.75 0 0 1 0 1.5h-2.25v3.25H17a.75.75 0 0 1 0 1.5h-2.25v2.75a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V4.25a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilRulerIcon.displayName = "PencilRulerIcon";
export { PencilRulerIcon };
