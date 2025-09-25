import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagBold = memo(
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
          d="M5.06 1.905c1.9-.118 3.317.048 4.487.368 1.16.317 2.04.777 2.81 1.163.776.39 1.45.71 2.323.89.87.18 1.994.23 3.635-.023C19.662 4.096 21 5.097 21 6.558v8.44c0 1.05-.74 1.992-1.81 2.186-2.056.372-3.567.364-4.82.12-1.25-.243-2.179-.713-3.02-1.137-.844-.424-1.615-.81-2.682-1.053-.907-.207-2.064-.314-3.668-.2V21a1 1 0 0 1-2 0V4.12c0-1.14.873-2.142 2.06-2.215m3.96 2.298C8.093 3.949 6.9 3.795 5.185 3.9 5.1 3.906 5 3.986 5 4.12v8.79c1.696-.109 3.01.003 4.111.254 1.329.302 2.294.793 3.137 1.217.845.425 1.554.775 2.505.96.948.185 2.2.216 4.081-.125a.22.22 0 0 0 .166-.218v-8.44a.26.26 0 0 0-.102-.204.36.36 0 0 0-.278-.074c-1.821.28-3.192.244-4.345.006-1.149-.238-2.023-.665-2.814-1.062-.797-.4-1.503-.765-2.44-1.021"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlagBold.displayName = "FlagBold";
export { FlagBold };
