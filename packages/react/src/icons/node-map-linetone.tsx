import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NodeMapIconLinetone = memo(
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
          <path d="M8.965 13.161a3.25 3.25 0 0 0 1.255 1.558l-2.938 2.369a3.25 3.25 0 0 0-1.255-1.558zM16.524 14.495a3.25 3.25 0 0 0-1.284 1.532l-1.516-1.273c.288-.18.546-.405.763-.663s.392-.552.52-.87zM15.999 9.75a3.25 3.25 0 0 0 .594 1.871l-1.346.418.002-.039a3.25 3.25 0 0 0-.594-1.872L16 9.71zM11.038 8.896a3.25 3.25 0 0 0-1.636 1.15L8.211 8.355A3.25 3.25 0 0 0 9.846 7.2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.25 15a3.246 3.246 0 0 1 3.25 3.25A3.25 3.25 0 1 1 4.25 15m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M18.25 14a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2c-.384 0-.726.172-.957.446A1.25 1.25 0 1 0 18.25 16M12 8.75a3.251 3.251 0 1 1 0 6.502 3.251 3.251 0 0 1 0-6.502m0 2a1.247 1.247 0 0 0-.974 2.034c.231.286.581.466.974.466.384 0 .726-.172.957-.446a1.24 1.24 0 0 0 .237-1.175A1.25 1.25 0 0 0 12 10.75M19.25 6.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 2a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NodeMapIconLinetone.displayName = "NodeMapIconLinetone";
export { NodeMapIconLinetone };
