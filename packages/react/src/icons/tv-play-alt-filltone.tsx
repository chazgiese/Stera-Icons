import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TvPlayAltIconFilltone = memo(
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
          d="M14.6 5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C1.999 15.59 2 14.703 2 13.599V12.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 5.544c.593-.302 1.233-.428 1.961-.487C7.41 4.999 8.297 5 9.401 5zm-4.207 4.729c-.282.03-.537.179-.703.408-.19.262-.19.715-.19 1.62v2.486c0 .905 0 1.358.19 1.62a1 1 0 0 0 .703.407c.322.035.715-.19 1.5-.638l2.175-1.243c.797-.456 1.196-.683 1.33-.98.116-.26.116-.558 0-.817-.134-.298-.533-.526-1.33-.982l-2.174-1.242c-.786-.449-1.18-.674-1.501-.64"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.393 9.729c.322-.035.715.19 1.5.64l2.175 1.241c.797.456 1.196.684 1.33.982a1 1 0 0 1 0 .816c-.134.298-.533.526-1.33.98l-2.174 1.244c-.786.449-1.18.673-1.501.639a1 1 0 0 1-.703-.408c-.19-.262-.19-.715-.19-1.62v-2.486c0-.905 0-1.358.19-1.62a1 1 0 0 1 .703-.408M9.054 1.606a1 1 0 0 1 1.34.448L11.865 5H9.63L8.605 2.946a1 1 0 0 1 .449-1.34M13.105 3.053a1 1 0 0 1 1.79.894L14.368 5h-2.236z"
        />
      </svg>
    ))
);
TvPlayAltIconFilltone.displayName = "TvPlayAltIconFilltone";
export { TvPlayAltIconFilltone };
