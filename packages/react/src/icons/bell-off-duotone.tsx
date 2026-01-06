import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellOffIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M3.425 8.253a.75.75 0 1 1 1.47.299A7.3 7.3 0 0 0 4.75 10v2.446c0 .498-.135.988-.391 1.415l-.898 1.495c-.5.834.1 1.894 1.072 1.894h9.212c.198 0 .39.079.53.219l1.82 1.816a.75.75 0 0 1 .139.871A4.751 4.751 0 0 1 7.31 18.75H4.533c-2.138 0-3.458-2.332-2.359-4.165l.899-1.496c.116-.194.177-.417.177-.643V10c0-.597.06-1.182.175-1.747M8.838 18.75a3.25 3.25 0 0 0 3.163 2.5c1.071 0 2.021-.52 2.614-1.323l-1.18-1.177z"
            clipRule="evenodd"
          />
          <path d="M12 1.25A8.75 8.75 0 0 1 20.75 10v2.446c0 .227.062.449.178.643l.899 1.496c.544.907.492 1.944.046 2.748a.75.75 0 0 1-1.312-.727 1.23 1.23 0 0 0-.021-1.25l-.898-1.495a2.75 2.75 0 0 1-.392-1.415V10A7.25 7.25 0 0 0 7.99 3.959a.75.75 0 0 1-.83-1.249A8.7 8.7 0 0 1 12 1.25" />
        </g>
        <path
          fill="currentColor"
          d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
BellOffIconDuotone.displayName = "BellOffIconDuotone";
export { BellOffIconDuotone };
