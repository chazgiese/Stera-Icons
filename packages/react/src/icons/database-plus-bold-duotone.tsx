import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabasePlusIconBoldDuotone = memo(
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
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v5.715a1 1 0 1 1-2 0v-3.1a9 9 0 0 1-.992.443C16.422 8.652 14.298 9 12 9s-4.422-.348-6.008-.942A9 9 0 0 1 5 7.614V12c0 .034.032.28.603.653.537.351 1.37.685 2.455.934a1 1 0 0 1-.447 1.95C6.628 15.31 5.733 15 5 14.612V19c0 .026.01.17.292.42.28.249.744.518 1.402.765C8.004 20.675 9.88 21 12 21q.146 0 .29-.002a1 1 0 0 1 .028 2Q12.161 23 12 23c-2.297 0-4.422-.348-6.008-.942-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.004 11a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
DatabasePlusIconBoldDuotone.displayName = "DatabasePlusIconBoldDuotone";
export { DatabasePlusIconBoldDuotone };
