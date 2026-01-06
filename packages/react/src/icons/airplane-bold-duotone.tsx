import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIconBoldDuotone = memo(
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
          <path d="M14.194 13.41A1 1 0 0 0 15 15h.514l-4.103 5.744A3 3 0 0 1 8.971 22H7.759a1.5 1.5 0 0 1-1.379-2.09l2.124-4.96 1.463.05a1 1 0 0 0 .96-.63l-.008.024L8.517 20h.454a1 1 0 0 0 .813-.419l4.403-6.162zM10.394 13.081l.006.003-.03-.012zM10.394 10.919l-.016.005.022-.009zM8.97 2a3 3 0 0 1 2.442 1.256L15.515 9H15a1 1 0 0 0-.795 1.604l-.018-.023L9.784 4.42A1 1 0 0 0 8.971 4h-.454l2.402 5.606.001.004a1 1 0 0 0-.953-.609l-1.462.048L6.38 4.09A1.5 1.5 0 0 1 7.759 2z" />
        </g>
        <path
          fill="currentColor"
          d="M3.269 6.499a2.25 2.25 0 0 1 1.96 1.143l.844 1.489L9.967 9A1 1 0 0 1 10.034 11l-4.5.15a1 1 0 0 1-.904-.507L3.49 8.626a.25.25 0 0 0-.218-.127h-.153l.376 3.39v.002q.004.037.004.074l.001.027v.039l-.005.076-.376 3.393h.153a.25.25 0 0 0 .217-.126l1.141-2.017a1 1 0 0 1 .904-.506l4.5.15A1 1 0 0 1 9.967 15l-3.894-.13-.843 1.488A2.25 2.25 0 0 1 3.272 17.5h-.713a1.5 1.5 0 0 1-1.491-1.665l.427-3.836-.427-3.834A1.5 1.5 0 0 1 2.558 6.5zM18.757 9c1.062 0 2.08.423 2.83 1.174l1.12 1.122.067.073a1 1 0 0 1-.067 1.341l-1.122 1.12A4 4 0 0 1 18.758 15h-3.757a1 1 0 0 1 0-2h3.757c.53 0 1.04-.21 1.414-.585l.414-.414-.414-.414A2 2 0 0 0 18.757 11H15a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
AirplaneIconBoldDuotone.displayName = "AirplaneIconBoldDuotone";
export { AirplaneIconBoldDuotone };
