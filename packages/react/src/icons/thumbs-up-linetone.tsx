import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIconLinetone = memo(
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
          d="M7.355 8.975a1 1 0 1 0 .29 1.978q.441-.066.855-.216V17a3 3 0 0 0 3 3l-.102.005A1 1 0 0 0 11.5 22H8a5 5 0 0 1-5-5v-4a4 4 0 0 1 4-4q.09 0 .179-.006zM6.5 11.066a2 2 0 0 0-1.49 1.73L5 13v4a3 3 0 0 0 2.465 2.952A4.98 4.98 0 0 1 6.5 17z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.709 22a4 4 0 0 0 3.849-2.919h.002v-.003l.003-.008.01-.03q.012-.042.035-.117l.126-.423c.106-.357.251-.848.405-1.386.303-1.06.656-2.35.81-3.133.097-.499.188-1.082.267-1.635C21.47 10.544 20.049 9 18.277 9h-1.82c.316-1.067.497-2.306.37-3.44-.097-.865-.385-1.766-1.032-2.46C15.123 2.382 14.174 2 13 2a1 1 0 0 0-.868.504L9.124 7.768a2.45 2.45 0 0 1-1.768 1.207 1 1 0 1 0 .289 1.978A4.45 4.45 0 0 0 10.86 8.76l2.689-4.705c.38.078.62.235.784.41.255.273.439.708.507 1.317.139 1.24-.247 2.797-.735 3.77A1 1 0 0 0 15 11h3.277a.946.946 0 0 1 .958 1.065 31 31 0 0 1-.25 1.532c-.134.684-.462 1.894-.77 2.967-.15.53-.293 1.013-.398 1.365l-.125.417-.034.113-.01.037-.002.001-.008.03A2 2 0 0 1 15.709 20H11.5a1 1 0 0 0 0 2z"
        />
      </svg>
    ))
);
ThumbsUpIconLinetone.displayName = "ThumbsUpIconLinetone";
export { ThumbsUpIconLinetone };
