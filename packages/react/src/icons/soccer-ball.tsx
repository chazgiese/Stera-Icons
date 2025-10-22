import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SoccerBallIcon = memo(
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
          d="M12 1.25c1.261 0 2.471.22 3.596.618l.006-.004.005.008C19.77 3.355 22.75 7.33 22.75 12q-.002.356-.026.706l.2.168-.238.282a10.7 10.7 0 0 1-1.878 5.003l.006.093-.076.005a10.76 10.76 0 0 1-5.68 4.048l-.073.182-.234-.094a10.77 10.77 0 0 1-5.503 0l-.233.094-.075-.182a10.76 10.76 0 0 1-5.68-4.048l-.074-.005.005-.093a10.7 10.7 0 0 1-1.878-5.003l-.237-.282.2-.168A11 11 0 0 1 1.25 12c0-4.671 2.98-8.645 7.142-10.128l.005-.008.006.004A10.7 10.7 0 0 1 12 1.25m-1.617 14.5-1.589 2.188 1.253 3.104a9.3 9.3 0 0 0 3.905 0l1.254-3.105-1.589-2.187zm6.194 2.798-.759 1.876a9.3 9.3 0 0 0 2.855-2.023zM5.327 18.4a9.3 9.3 0 0 0 2.854 2.023l-.758-1.876zm-2.48-5.058A9.2 9.2 0 0 0 4.1 16.81l3.481.245 1.563-2.152-1.2-2.799-2.609-.847zm13.209-1.238-1.2 2.8 1.564 2.15 3.48-.244a9.2 9.2 0 0 0 1.251-3.468l-2.485-2.085zm-6.65-.394 1.088 2.539h3.012l1.087-2.54L12 9.488zM3.75 7.816a9.2 9.2 0 0 0-.983 3.64l1.563-1.312zm15.92 2.328 1.562 1.311a9.2 9.2 0 0 0-.983-3.639zM8.253 3.542a9.3 9.3 0 0 0-3.385 2.565l.93 3.725 2.534.823 2.918-2.5v-2.74zm4.497 1.873v2.74l2.917 2.5 2.535-.823.929-3.725a9.3 9.3 0 0 0-3.385-2.565zM12 2.75q-.968.001-1.88.19L12 4.115l1.879-1.175A9.3 9.3 0 0 0 12 2.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SoccerBallIcon.displayName = "SoccerBallIcon";
export { SoccerBallIcon };
