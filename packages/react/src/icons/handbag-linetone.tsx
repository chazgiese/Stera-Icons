import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandbagIconLinetone = memo(
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
          d="M15.252 8c1.247 0 2.166-.019 2.955.312a4 4 0 0 1 1.652 1.29c.513.685.717 1.582 1.02 2.791l.6 2.4c.25.998.453 1.811.558 2.473.106.67.132 1.301-.058 1.915a4 4 0 0 1-1.749 2.24c-.549.332-1.167.46-1.842.52-.668.06-1.506.059-2.536.059H8.147c-1.029 0-1.867 0-2.535-.059-.675-.06-1.293-.188-1.843-.52a4 4 0 0 1-1.749-2.24c-.189-.614-.163-1.245-.057-1.915.104-.662.308-1.475.557-2.473l.601-2.4c.302-1.21.507-2.106 1.02-2.79a4 4 0 0 1 1.652-1.29C6.58 7.98 7.5 8 8.748 8zm-6.504 2c-1.433 0-1.854.019-2.18.156-.328.138-.614.36-.827.645-.212.283-.332.687-.68 2.077l-.6 2.4c-.259 1.034-.436 1.747-.524 2.3-.086.548-.063.826-.005 1.013.144.467.455.866.874 1.12.167.101.431.19.983.238.559.05 1.293.05 2.358.05h7.705c1.066 0 1.8 0 2.359-.05.551-.049.816-.137.983-.238a2 2 0 0 0 .874-1.12c.058-.187.08-.465-.006-1.012-.087-.554-.265-1.267-.523-2.3l-.6-2.401c-.348-1.39-.468-1.794-.68-2.077a2 2 0 0 0-.826-.645c-.327-.137-.749-.156-2.181-.156z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a5 5 0 0 1 5 5v1.04c-.46-.041-.972-.04-1.558-.04H15V7a3 3 0 1 0-6 0v1h-.442C7.971 8 7.46 7.999 7 8.04V7a5 5 0 0 1 5-5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HandbagIconLinetone.displayName = "HandbagIconLinetone";
export { HandbagIconLinetone };
