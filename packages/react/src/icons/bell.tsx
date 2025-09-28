import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Bell = memo(
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
          d="M12 1.25A8.75 8.75 0 0 1 20.75 10v2.446c0 .227.062.449.178.643l.899 1.496c1.099 1.833-.222 4.165-2.359 4.165H16.69a4.75 4.75 0 0 1-9.38 0H4.533c-2.138 0-3.458-2.332-2.359-4.165l.899-1.496c.116-.194.177-.417.177-.643V10A8.75 8.75 0 0 1 12 1.25m-3.163 17.5a3.251 3.251 0 0 0 6.326 0zM12 2.75A7.25 7.25 0 0 0 4.75 10v2.446c0 .498-.135.988-.391 1.415l-.898 1.495c-.5.834.1 1.894 1.072 1.894h14.935a1.25 1.25 0 0 0 1.072-1.894l-.898-1.495a2.75 2.75 0 0 1-.392-1.415V10A7.25 7.25 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Bell.displayName = "Bell";
export { Bell };
