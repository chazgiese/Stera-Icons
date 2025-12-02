import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseBanIcon = memo(
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
          d="M12 1.25c2.275 0 4.368.345 5.92.927.773.29 1.451.653 1.95 1.094.496.441.88 1.023.88 1.729v5.715a.75.75 0 1 1-1.5 0V7.184a7.6 7.6 0 0 1-1.33.64c-1.552.581-3.645.926-5.92.926s-4.368-.345-5.92-.927a7.6 7.6 0 0 1-1.33-.64V12c0 .105.045.266.249.483.208.222.547.46 1.03.692.966.46 2.374.823 4.043.984a.75.75 0 1 1-.144 1.493c-1.781-.172-3.373-.563-4.545-1.123a7 7 0 0 1-.633-.344V19c0 .123.064.33.376.606.312.277.806.56 1.48.813 1.344.504 3.251.831 5.394.831q.147 0 .294-.002a.75.75 0 0 1 .021 1.5q-.157.002-.315.002c-2.275 0-4.368-.345-5.92-.927-.773-.29-1.451-.653-1.95-1.094-.496-.441-.88-1.023-.88-1.729V5c0-.706.384-1.288.88-1.729.499-.441 1.177-.804 1.95-1.094C7.632 1.595 9.725 1.25 12 1.25m0 1.5c-2.143 0-4.05.327-5.394.831-.674.253-1.168.536-1.48.813S4.75 4.877 4.75 5s.064.33.376.606c.312.277.806.56 1.48.813 1.344.504 3.251.831 5.394.831s4.05-.327 5.394-.831c.674-.253 1.168-.536 1.48-.813s.376-.483.376-.606-.064-.33-.376-.606c-.312-.277-.806-.56-1.48-.813C16.05 3.077 14.143 2.75 12 2.75"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 12.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m-2.767 3.044a3.25 3.25 0 0 0 4.472 4.472zM17 13.75c-.626 0-1.21.177-1.706.483l4.472 4.472A3.25 3.25 0 0 0 17 13.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DatabaseBanIcon.displayName = "DatabaseBanIcon";
export { DatabaseBanIcon };
