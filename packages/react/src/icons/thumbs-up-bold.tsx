import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIconBold = memo(
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
          d="M15.709 22a4 4 0 0 0 3.849-2.92h.002v-.002l.003-.008.01-.03q.012-.042.034-.117l.127-.423c.106-.357.25-.848.405-1.386.303-1.06.656-2.35.81-3.133.097-.499.188-1.082.267-1.635C21.47 10.544 20.049 9 18.277 9h-1.82c.316-1.067.497-2.306.37-3.44-.097-.865-.385-1.766-1.032-2.46C15.123 2.382 14.174 2 13 2a1 1 0 0 0-.795.393l-.073.11-3.008 5.265A2.45 2.45 0 0 1 7 9a4 4 0 0 0-4 4v4a5 5 0 0 0 5 5zM11.5 20a3 3 0 0 1-3-3v-6.262a4.45 4.45 0 0 0 2.36-1.978l2.689-4.706c.38.078.62.236.784.41.255.274.438.71.507 1.318.139 1.24-.248 2.797-.735 3.77A1 1 0 0 0 15 11h3.277a.946.946 0 0 1 .958 1.065 31 31 0 0 1-.25 1.532c-.134.684-.462 1.894-.77 2.967a137 137 0 0 1-.557 1.895l-.009.03-.002.007v.001l-.01.03A2 2 0 0 1 15.71 20zm-4.035-.048A3 3 0 0 1 5 17v-4c0-.932.638-1.711 1.5-1.934V17c0 1.104.359 2.125.965 2.952"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThumbsUpIconBold.displayName = "ThumbsUpIconBold";
export { ThumbsUpIconBold };
