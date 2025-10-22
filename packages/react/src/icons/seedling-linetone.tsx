import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SeedlingIconLinetone = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.32}
        >
          <path d="M2 7c3.01 0 5.66 1.003 7.071 2.414a4 4 0 0 1-5.657 5.657C2.004 13.661 1 11.01 1 8V7zm1.049 2.05c.197 2.142.975 3.801 1.78 4.606a2 2 0 0 0 2.828-2.828c-.805-.805-2.465-1.581-4.608-1.778M22.985 4.016c0 2.555-.326 4.418-.897 5.877-.577 1.473-1.38 2.47-2.224 3.315a5 5 0 0 1-7.071-7.07c.845-.845 1.841-1.648 3.315-2.225 1.459-.57 3.322-.897 5.877-.897h1zm-2.022 1.023c-1.84.075-3.143.351-4.126.736-1.14.447-1.912 1.06-2.63 1.777a3 3 0 0 0 4.242 4.242c.718-.718 1.33-1.49 1.777-2.63.384-.983.662-2.286.737-4.125" />
        </g>
        <path
          fill="currentColor"
          d="M15.293 9.293a1 1 0 1 1 1.414 1.414l-1.657 1.657a7 7 0 0 0-2.05 4.95V21a1 1 0 0 1-.364.771.995.995 0 0 1-1.407-.135A1 1 0 0 1 11 21v-1.343c0-.796-.316-1.56-.879-2.122l-4.328-4.328a1 1 0 1 1 1.414-1.414l3.936 3.935a9 9 0 0 1 2.493-4.778z"
        />
      </svg>
    ))
);
SeedlingIconLinetone.displayName = "SeedlingIconLinetone";
export { SeedlingIconLinetone };
