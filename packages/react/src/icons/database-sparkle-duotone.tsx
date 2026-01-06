import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseSparkleIconDuotone = memo(
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
          d="M15.54 10.072a.5.5 0 0 1 .92 0l1.01 2.357a4 4 0 0 0 2.101 2.101l2.356 1.01a.5.5 0 0 1 0 .92l-2.356 1.01a4 4 0 0 0-2.102 2.101l-1.01 2.356a.5.5 0 0 1-.918 0l-1.011-2.356a4 4 0 0 0-2.1-2.102l-2.358-1.01a.5.5 0 0 1 0-.918l2.357-1.011a4 4 0 0 0 2.101-2.1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c2.275 0 4.368.345 5.92.927.773.29 1.451.653 1.95 1.094.496.441.88 1.023.88 1.729v5.715a.75.75 0 1 1-1.5 0V7.184a7.6 7.6 0 0 1-1.33.64c-1.552.581-3.645.926-5.92.926s-4.368-.345-5.92-.927a7.6 7.6 0 0 1-1.33-.64V12c0 .161.12.473.716.862.57.373 1.436.717 2.536.97a.75.75 0 1 1-.335 1.461c-1.146-.263-2.156-.638-2.917-1.111V19c0 .123.064.33.376.606.312.277.806.56 1.48.813 1.344.504 3.251.831 5.394.831q.147 0 .294-.002a.75.75 0 0 1 .021 1.5q-.157.002-.315.002c-2.275 0-4.368-.345-5.92-.927-.773-.29-1.451-.653-1.95-1.094-.496-.441-.88-1.023-.88-1.729V5c0-.706.384-1.288.88-1.729.499-.441 1.177-.804 1.95-1.094C7.632 1.595 9.725 1.25 12 1.25m0 1.5c-2.143 0-4.05.327-5.394.831-.674.253-1.168.536-1.48.813S4.75 4.877 4.75 5s.064.33.376.606c.312.277.806.56 1.48.813 1.344.504 3.251.831 5.394.831s4.05-.327 5.394-.831c.674-.253 1.168-.536 1.48-.813s.376-.483.376-.606-.064-.33-.376-.606c-.312-.277-.806-.56-1.48-.813C16.05 3.077 14.143 2.75 12 2.75"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
DatabaseSparkleIconDuotone.displayName = "DatabaseSparkleIconDuotone";
export { DatabaseSparkleIconDuotone };
