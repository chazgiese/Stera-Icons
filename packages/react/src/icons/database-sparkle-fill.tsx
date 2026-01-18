import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseSparkleIconFill = memo(
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
          d="M4.47 14.518c1.383.736 3.553 1.287 6.114 1.438-.584 1.076-.192 2.596 1.179 3.074l.692.241a3.7 3.7 0 0 1 2.274 2.274l.24.692q.104.29.261.52A21 21 0 0 1 12 23c-2.297 0-4.422-.348-6.008-.942-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19v-5.265z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v6.4a1 1 0 0 1-.53.883 11 11 0 0 1-1.07.488 4 4 0 0 1-.128-.316l-.242-.692-.07-.174c-.769-1.746-3.34-1.688-3.99.174l-.242.692c-.2.574-.537 1.08-.97 1.485A26 26 0 0 1 12 14c-3.37 0-6.453-.643-8.47-1.717A1 1 0 0 1 3 11.4V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16.387 12.258c.202-.581 1.024-.581 1.227 0l.241.692a5.2 5.2 0 0 0 3.196 3.194l.691.243c.581.202.581 1.024 0 1.227l-.691.241a5.2 5.2 0 0 0-3.196 3.196l-.24.691c-.204.581-1.026.581-1.228 0l-.243-.691a5.2 5.2 0 0 0-3.194-3.196l-.692-.24c-.581-.204-.581-1.026 0-1.228l.692-.243a5.2 5.2 0 0 0 3.194-3.194z"
        />
      </svg>
    ))
);
DatabaseSparkleIconFill.displayName = "DatabaseSparkleIconFill";
export { DatabaseSparkleIconFill };
