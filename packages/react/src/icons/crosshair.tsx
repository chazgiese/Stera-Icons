import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIcon = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v2.286a7.75 7.75 0 0 1 6.963 6.964H22a.75.75 0 0 1 0 1.5h-2.287a7.75 7.75 0 0 1-6.963 6.963V22a.75.75 0 0 1-1.5 0v-2.287a7.75 7.75 0 0 1-6.963-6.963H2a.75.75 0 0 1 0-1.5h2.287a7.75 7.75 0 0 1 6.963-6.964V2a.75.75 0 0 1 .75-.75m-6.203 11.5a6.25 6.25 0 0 0 5.453 5.453V12.75zm6.953 0v5.453a6.25 6.25 0 0 0 5.453-5.453zm0-1.5h5.453a6.25 6.25 0 0 0-5.453-5.454zm-1.5-5.454a6.25 6.25 0 0 0-5.453 5.454h5.453z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CrosshairIcon.displayName = "CrosshairIcon";
export { CrosshairIcon };
