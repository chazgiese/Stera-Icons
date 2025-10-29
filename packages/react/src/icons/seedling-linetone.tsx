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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2 7c3.01 0 5.66 1.003 7.071 2.414a4 4 0 0 1 .618 4.861L8.173 12.76a2 2 0 0 0-.516-1.93c-.805-.806-2.465-1.582-4.608-1.78.197 2.143.975 3.802 1.78 4.607a2 2 0 0 0 1.929.516l1.517 1.518a4 4 0 0 1-4.86-.619C2.002 13.661 1 11.01 1 8V7zM22.985 4.016c0 2.555-.326 4.418-.897 5.877-.577 1.473-1.38 2.47-2.224 3.315a5 5 0 0 1-6.033.796 7 7 0 0 1 1.206-1.627 3 3 0 0 0 3.412-.583c.718-.718 1.33-1.49 1.777-2.63.384-.983.662-2.286.737-4.125-1.84.075-3.143.351-4.126.736-1.14.447-1.912 1.06-2.63 1.777a3 3 0 0 0-.584 3.41 9 9 0 0 0-1.315 1.683 5 5 0 0 1 .485-6.507c.845-.845 1.841-1.648 3.315-2.225 1.459-.57 3.322-.897 5.877-.897h1z" />
        </g>
        <path
          fill="currentColor"
          d="M15.293 9.293a1 1 0 1 1 1.414 1.414l-1.657 1.657a7 7 0 0 0-2.05 4.95V21a1 1 0 0 1-.364.772.997.997 0 0 1-1.408-.136A1 1 0 0 1 11 21v-1.343c0-.795-.316-1.56-.879-2.122l-4.328-4.328a1 1 0 1 1 1.414-1.414l3.936 3.936a9 9 0 0 1 2.493-4.779z"
        />
      </svg>
    ))
);
SeedlingIconLinetone.displayName = "SeedlingIconLinetone";
export { SeedlingIconLinetone };
