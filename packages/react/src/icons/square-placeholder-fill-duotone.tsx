import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SquarePlaceholderIconFillDuotone = memo(
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
          <path d="M14.567 21.992q.665-.005 1.224-.03C15.017 22 14.098 22 13 22h-1.606L2 12.606V11q0-.853.007-1.567zM8.541 21.976q.45.013.964.016a27 27 0 0 1-1.87-.063c-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359a19 19 0 0 1-.048-.906zM21.876 16.852c-.087.69-.24 1.302-.53 1.872a6 6 0 0 1-2.622 2.622c-.577.293-1.197.447-1.899.534q.204-.025.4-.059L2.178 6.775a5.2 5.2 0 0 1 .931-2.25l16.366 16.364a6 6 0 0 0 1.414-1.414L4.524 3.109a5.197 5.197 0 0 1 2.251-.932l15.046 15.048q.03-.183.055-.373M12.607 2 22 11.393V13c0 1.098-.001 2.017-.037 2.791q.023-.559.03-1.224L9.432 2.007Q10.148 2 11 2zM15.459 2.023q.487.015.906.048c.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359a27 27 0 0 1 .047.906z" />
        </g>
        <path
          fill="currentColor"
          d="M11.394 22H11a80 80 0 0 1-2.459-.024l-6.518-6.517A80 80 0 0 1 2 13v-.394zM17.225 21.821a10 10 0 0 1-.86.108 26 26 0 0 1-1.798.063L2.007 9.432c.007-.683.022-1.277.064-1.797q.037-.45.107-.86zM20.889 19.475a6 6 0 0 1-1.414 1.414L3.109 4.524A6 6 0 0 1 4.524 3.11zM21.992 14.567a26 26 0 0 1-.063 1.798q-.037.45-.108.86L6.775 2.178q.41-.07.86-.107c.52-.042 1.114-.057 1.798-.064zM13 2c.945 0 1.758 0 2.459.023l6.517 6.518c.022.702.024 1.514.024 2.459v.393L12.607 2z"
        />
      </svg>
    ))
);
SquarePlaceholderIconFillDuotone.displayName =
  "SquarePlaceholderIconFillDuotone";
export { SquarePlaceholderIconFillDuotone };
