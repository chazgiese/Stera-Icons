import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TvPlayAltIconLinetone = memo(
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
          d="M14.6 5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 15.59 2 14.703 2 13.599V12.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 5.544c.593-.302 1.233-.428 1.961-.487C7.41 4.999 8.297 5 9.401 5zM9.4 7c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C4 10.471 4 11.264 4 12.4v1.2c0 1.136 0 1.929.05 2.545.05.606.143.954.277 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C7.471 19 8.264 19 9.4 19h5.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.218C20 15.53 20 14.736 20 13.6v-1.2c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C16.53 7 15.736 7 14.6 7z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.395 2.054a1 1 0 1 0-1.79.892L9.63 5h2.235zM12.132 5h2.236l.527-1.053a1 1 0 0 0-1.79-.894z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M9.5 11.757c0-.905 0-1.358.19-1.62a1 1 0 0 1 .702-.408c.323-.035.716.19 1.502.639l2.175 1.243c.797.455 1.195.683 1.328.98a1 1 0 0 1 0 .817c-.133.298-.531.526-1.328.981l-2.175 1.243c-.786.45-1.18.674-1.502.639a1 1 0 0 1-.702-.408c-.19-.262-.19-.715-.19-1.62z"
        />
      </svg>
    ))
);
TvPlayAltIconLinetone.displayName = "TvPlayAltIconLinetone";
export { TvPlayAltIconLinetone };
