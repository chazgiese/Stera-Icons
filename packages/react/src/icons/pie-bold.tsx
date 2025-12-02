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
          d="M12 4c5.06 0 9.295 2.861 10.73 6.952.222.636.294 1.48-.141 2.238a3.6 3.6 0 0 1-2.051 1.65c-.017.057-.031.113-.05.169l-1.072 3A3 3 0 0 1 16.59 20H7.409a3 3 0 0 1-2.825-1.991l-1.072-3q-.029-.084-.051-.168a3.6 3.6 0 0 1-2.05-1.65c-.435-.76-.363-1.603-.14-2.239C2.705 6.862 6.94 4 12 4m5 9.955A3.52 3.52 0 0 1 14.5 15a3.52 3.52 0 0 1-2.5-1.045A3.52 3.52 0 0 1 9.5 15 3.52 3.52 0 0 1 7 13.955a3.55 3.55 0 0 1-1.428.874l.896 2.507a1 1 0 0 0 .94.664h9.183a1 1 0 0 0 .941-.664l.895-2.507A3.55 3.55 0 0 1 17 13.955M12 6c-4.331 0-7.726 2.432-8.841 5.613-.102.292-.066.488-.013.581A1.57 1.57 0 0 0 4.5 13c.712 0 1.347-.507 1.53-1.242l.055-.16a1 1 0 0 1 1.885.16C8.154 12.493 8.787 13 9.5 13c.712 0 1.347-.507 1.53-1.242l.055-.16a1 1 0 0 1 1.885.16c.184.735.817 1.242 1.53 1.242.712 0 1.347-.507 1.53-1.242l.055-.16a1 1 0 0 1 1.886.16c.183.735.816 1.242 1.529 1.242q.05 0 .1-.003c.52-.034.986-.337 1.254-.803.054-.093.09-.29-.012-.58C19.726 8.431 16.332 6 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconBold.displayName = "PieIconBold";
export { PieIconBold };
