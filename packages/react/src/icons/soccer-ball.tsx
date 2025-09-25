import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBall = memo(
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
          d="M12 1.25c1.261 0 2.471.22 3.596.618l.006-.004.005.008C19.77 3.355 22.75 7.33 22.75 12q-.002.357-.026.708l.2.168-.238.282a10.7 10.7 0 0 1-1.878 5.001l.006.092-.076.005a10.76 10.76 0 0 1-5.68 4.05l-.073.18-.233-.094a10.76 10.76 0 0 1-5.505 0l-.232.094-.074-.18a10.76 10.76 0 0 1-5.68-4.05l-.075-.005.005-.092a10.7 10.7 0 0 1-1.878-5l-.237-.283.2-.168Q1.25 12.357 1.25 12c0-4.671 2.98-8.645 7.142-10.128l.005-.008.006.004A10.7 10.7 0 0 1 12 1.25m-1.618 14.5-1.588 2.186 1.254 3.106a9.3 9.3 0 0 0 3.903 0l1.255-3.106-1.588-2.186zM5.325 18.4a9.3 9.3 0 0 0 2.857 2.025l-.76-1.878zm11.252.147-.76 1.878a9.3 9.3 0 0 0 2.857-2.025zm-13.73-5.202a9.2 9.2 0 0 0 1.25 3.466l3.483.244 1.563-2.15-1.2-2.798-2.609-.847zm13.209-1.238-1.2 2.797 1.564 2.15 3.481-.243a9.2 9.2 0 0 0 1.25-3.466l-2.485-2.085zm-6.65-.396 1.088 2.539h3.012l1.087-2.54L12 9.488zM3.75 7.817a9.2 9.2 0 0 0-.982 3.64l1.563-1.312zm15.92 2.329 1.563 1.311a9.2 9.2 0 0 0-.982-3.64zM8.254 3.542a9.3 9.3 0 0 0-3.385 2.566l.93 3.725 2.533.823 2.919-2.502V5.415zm4.497 1.873v2.74l2.918 2.501 2.534-.823.929-3.725a9.3 9.3 0 0 0-3.385-2.566zM12 2.75q-.968.001-1.88.19L12 4.115l1.879-1.175A9.3 9.3 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBall.displayName = "SoccerBall";
export { SoccerBall };
