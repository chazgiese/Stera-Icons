import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleIcon = memo(
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
          d="M12 6.25c.3 0 .571.179.69.454l.87 2.03a3.25 3.25 0 0 0 1.706 1.706l2.03.87a.75.75 0 0 1 0 1.38l-2.03.87a3.25 3.25 0 0 0-1.706 1.706l-.87 2.03a.75.75 0 0 1-1.38 0l-.87-2.03a3.25 3.25 0 0 0-1.706-1.706l-2.03-.87a.75.75 0 0 1 0-1.38l2.03-.87a3.25 3.25 0 0 0 1.706-1.706l.87-2.03.052-.099A.75.75 0 0 1 12 6.25m-.18 3.075a4.75 4.75 0 0 1-2.495 2.494L8.903 12l.422.18a4.75 4.75 0 0 1 2.494 2.495l.181.42.18-.42a4.75 4.75 0 0 1 2.495-2.494l.42-.181-.42-.18a4.75 4.75 0 0 1-2.494-2.495L12 8.903z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleCircleIcon.displayName = "SparkleCircleIcon";
export { SparkleCircleIcon };
