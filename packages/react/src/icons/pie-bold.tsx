import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PieIconBold = memo(
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
          d="M9.293 7.543a1 1 0 0 1 1.414 1.414l-1 1a1 1 0 0 1-1.414-1.414zM13.293 7.543a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4c5.061 0 9.296 2.861 10.73 6.952.223.636.295 1.48-.14 2.238a3.6 3.6 0 0 1-2.052 1.65q-.022.085-.05.169l-1.072 3A3 3 0 0 1 16.591 20H7.41a3 3 0 0 1-2.825-1.991l-1.071-3q-.028-.084-.052-.168a3.6 3.6 0 0 1-2.049-1.65c-.436-.76-.363-1.603-.14-2.239C2.706 6.862 6.939 4 12 4m5 9.955A3.52 3.52 0 0 1 14.5 15a3.52 3.52 0 0 1-2.5-1.045A3.52 3.52 0 0 1 9.5 15 3.52 3.52 0 0 1 7 13.955a3.55 3.55 0 0 1-1.427.874l.895 2.507a1 1 0 0 0 .941.664h9.182a1 1 0 0 0 .941-.664l.895-2.507A3.55 3.55 0 0 1 17 13.955M12 6C7.67 6 4.275 8.432 3.16 11.613c-.103.292-.067.488-.013.581A1.57 1.57 0 0 0 4.5 13c.713 0 1.347-.507 1.53-1.242l.055-.16a1 1 0 0 1 1.886.16C8.154 12.493 8.788 13 9.5 13c.712 0 1.346-.507 1.53-1.242l.054-.16a1 1 0 0 1 1.886.16c.183.735.817 1.242 1.53 1.242.712 0 1.346-.507 1.53-1.242l.054-.16a1 1 0 0 1 1.886.16c.183.735.817 1.242 1.53 1.242q.05 0 .099-.003c.52-.034.987-.337 1.255-.803.053-.093.09-.29-.013-.58C19.727 8.431 16.332 6 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconBold.displayName = "PieIconBold";
export { PieIconBold };
