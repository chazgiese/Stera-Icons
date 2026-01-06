import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TvPlayAltIconFill = memo(
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
          d="M9.054 1.606a1 1 0 0 1 1.34.448L11.865 5h.268l.973-1.947a1 1 0 0 1 1.79.894L14.368 5h.232c1.103 0 1.991 0 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.186c.302.592.428 1.232.487 1.96.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.992-.058 2.709-.06.729-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.488-.718.058-1.606.057-2.71.057H9.4c-1.103 0-1.991.001-2.709-.057-.728-.06-1.368-.186-1.96-.488a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.232-.487-1.961-.059-.717-.058-1.606-.058-2.71v-1.198c0-1.104-.001-1.992.058-2.71.06-.728.185-1.368.487-1.96A5 5 0 0 1 4.73 5.545c.593-.302 1.233-.428 1.961-.487C7.41 4.999 8.297 5 9.401 5h.229L8.605 2.946a1 1 0 0 1 .449-1.34m1.339 8.123a1 1 0 0 0-.703.408c-.19.262-.19.715-.19 1.62v2.486c0 .906 0 1.358.19 1.62.166.23.422.378.703.409.322.034.715-.19 1.5-.64l2.176-1.242c.797-.455 1.195-.684 1.329-.982a1 1 0 0 0 0-.816c-.134-.298-.532-.526-1.329-.982l-2.175-1.242c-.786-.449-1.18-.674-1.501-.64"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TvPlayAltIconFill.displayName = "TvPlayAltIconFill";
export { TvPlayAltIconFill };
