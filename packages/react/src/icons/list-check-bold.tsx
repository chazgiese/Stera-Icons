import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckIconBold = memo(
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
          d="M5.268 15.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.491.702zM22 17a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.268 9.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.491.702zM22 11a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.268 3.817a1.001 1.001 0 0 1 1.463 1.365l-2.8 3a1 1 0 0 1-1.55-.11L1.18 6.36A1 1 0 0 1 2.819 5.21l.491.702zM22 5a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          d="M5.269 15.818a1.001 1.001 0 0 1 1.462 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.492.702zM22 17a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.269 9.818a1.001 1.001 0 0 1 1.462 1.365l-2.8 3a1 1 0 0 1-1.55-.11l-1.2-1.713a1 1 0 0 1 1.638-1.148l.492.702zM22 11a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2zM5.269 3.818A1.001 1.001 0 0 1 6.73 5.183l-2.8 3a1 1 0 0 1-1.55-.11L1.18 6.36a1 1 0 0 1 1.638-1.148l.492.702zM22 5a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListCheckIconBold.displayName = "ListCheckIconBold";
export { ListCheckIconBold };
