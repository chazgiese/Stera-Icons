import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseXIconFilled = memo(
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
          d="M4.47 14.518c1.59.846 4.218 1.448 7.285 1.48l.003.002-.38.379a3 3 0 1 0 4.243 4.242l.379-.379.379.38a2.99 2.99 0 0 0 2.306.87c.117-.008.192.188.087.24a9 9 0 0 1-.764.326c-1.586.595-3.71.942-6.008.942s-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19v-5.265z"
        />
        <path
          fill="currentColor"
          d="M17.793 12.793a1 1 0 0 1 1.414 1.414L17.414 16l1.793 1.793a1 1 0 0 1-1.414 1.414L16 17.414l-1.793 1.793a1 1 0 1 1-1.414-1.414L14.586 16l-1.793-1.793a1 1 0 1 1 1.414-1.414L16 14.586z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v6.4a1 1 0 0 1-.065.348 3 3 0 0 0-4.556-.37l-.379.38-.379-.38a3 3 0 0 0-5.083 2.579c-2.79-.157-5.287-.758-7.008-1.674A1 1 0 0 1 3 11.4V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DatabaseXIconFilled.displayName = "DatabaseXIconFilled";
export { DatabaseXIconFilled };
