import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseBanIconFilled = memo(
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
          d="M4.47 14.518c1.383.736 3.553 1.287 6.114 1.438q-.083.51-.084 1.044a6.5 6.5 0 0 0 3.74 5.885c-.719.074-1.47.115-2.24.115-2.297 0-4.422-.348-6.008-.942-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19v-5.265z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 12a5 5 0 1 1 0 10 5 5 0 0 1 0-10m-2.706 3.708A3 3 0 0 0 17 20c.463 0 .9-.108 1.291-.295zM17 14c-.463 0-.9.107-1.292.294l3.997 3.997C19.892 17.9 20 17.463 20 17a3 3 0 0 0-3-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v6.4a1 1 0 0 1-.089.409 6.499 6.499 0 0 0-9.672 2.179c-3.07-.09-5.845-.712-7.709-1.705A1 1 0 0 1 3 11.4V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DatabaseBanIconFilled.displayName = "DatabaseBanIconFilled";
export { DatabaseBanIconFilled };
