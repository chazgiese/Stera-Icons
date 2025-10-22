import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImageLandscapeIconFilltone = memo(
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
          d="M15.6 3c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H8.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 15.59 1 14.703 1 13.599V10.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 3.73 3.544c.593-.302 1.233-.428 1.961-.487C6.41 2.999 7.297 3 8.401 3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.04 16.047a12 12 0 0 0 .027.364c.062.687.19 1.294.478 1.858a5 5 0 0 0 2.186 2.186c.592.302 1.232.428 1.96.487C6.397 21 7.268 21 8.347 21h7.306c1.079 0 1.95 0 2.656-.058.728-.06 1.368-.185 1.96-.487a5 5 0 0 0 2.092-2.009l-4.8-4.8-.114-.102a1.5 1.5 0 0 0-1.893 0l-.114.102-1.94 1.94-4.94-4.94a1.5 1.5 0 0 0-2.12 0zM17 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.44 10.647a1.5 1.5 0 0 1 2.12 0l4.94 4.939 1.94-1.94.114-.102a1.5 1.5 0 0 1 1.893 0l.114.102 4.8 4.8a5 5 0 0 1-.515.749l-.012.014c-.43.513-.961.939-1.564 1.246-.593.302-1.233.428-1.961.487-.706.058-1.577.058-2.656.058H8.347c-1.079 0-1.95 0-2.656-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.27-.532-.4-1.102-.466-1.739l-.012-.12-.01-.102-.018-.262z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
      </svg>
    ))
);
ImageLandscapeIconFilltone.displayName = "ImageLandscapeIconFilltone";
export { ImageLandscapeIconFilltone };
