import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DatabaseSparkleIconFilled = memo(
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
          d="M4.47 14.518c.947.504 2.263.92 3.821 1.182-.123.838.274 1.745 1.19 2.138l2.358 1.01a2.5 2.5 0 0 1 1.312 1.313l1.011 2.358q.083.191.194.353c-.753.083-1.543.128-2.356.128-2.297 0-4.422-.348-6.008-.942-.79-.296-1.498-.673-2.027-1.142C3.437 20.448 3 19.803 3 19v-5.265zM15.54 10.072a.5.5 0 0 1 .92 0l1.01 2.358a4 4 0 0 0 2.1 2.1l2.358 1.01a.5.5 0 0 1 0 .92l-2.358 1.01a4 4 0 0 0-2.1 2.1l-1.01 2.358a.5.5 0 0 1-.92 0l-1.01-2.358a4 4 0 0 0-2.1-2.1l-2.358-1.01a.5.5 0 0 1 0-.92l2.358-1.01a4 4 0 0 0 2.1-2.1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c2.297 0 4.422.348 6.008.942.79.296 1.498.673 2.027 1.142C20.563 3.552 21 4.197 21 5v6.4a1 1 0 0 1-.53.883q-.452.238-.971.447a2.5 2.5 0 0 1-.65-.891L17.838 9.48c-.671-1.565-2.842-1.614-3.607-.146l-.069.146-1.01 2.358a2.5 2.5 0 0 1-1.313 1.312l-1.805.773c-2.586-.198-4.887-.78-6.504-1.64A1 1 0 0 1 3 11.4V5c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142C7.578 1.348 9.702 1 12 1m0 2c-2.121 0-3.997.325-5.306.815-.658.247-1.121.516-1.402.765C5.01 4.83 5 4.974 5 5s.01.17.292.42c.28.249.744.518 1.402.765C8.004 6.675 9.88 7 12 7s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765C15.996 3.325 14.12 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DatabaseSparkleIconFilled.displayName = "DatabaseSparkleIconFilled";
export { DatabaseSparkleIconFilled };
