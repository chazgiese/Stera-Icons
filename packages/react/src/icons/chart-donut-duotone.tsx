import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartDonutIconDuotone = memo(
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
          d="M12.398 1.258a10.75 10.75 0 0 1 7.204 18.344.75.75 0 0 0 0-1.061l-.554-.554a9.25 9.25 0 0 0 2.024-4.182 9.25 9.25 0 0 0-.268-4.64l-4.186 1.733c.159.662.175 1.354.041 2.029a4.75 4.75 0 0 1-.813 1.858l-.488-.487a.75.75 0 0 0-1.06 0A3.251 3.251 0 0 0 12 8.75a.75.75 0 0 0 .75-.75v-.688a4.75 4.75 0 0 1 2.144.922l.075.06q.083.069.165.14l.086.076q.063.06.124.12.1.1.191.203l.072.081q.068.078.131.16l.041.054q.143.186.266.385L20.23 7.78a9.3 9.3 0 0 0-3.091-3.471 9.25 9.25 0 0 0-4.096-1.5l-.293-.028V2a.75.75 0 0 0-.75-.75q.2 0 .398.008"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75 3.25 3.25 0 1 0 2.298 5.548.75.75 0 0 1 1.06 0l4.244 4.243a.75.75 0 0 1 0 1.06 10.753 10.753 0 0 1-14.421.709A10.75 10.75 0 0 1 12 1.25m-.75 1.531a9.25 9.25 0 0 0-6.941 4.08 9.251 9.251 0 0 0 10.377 13.99 9.25 9.25 0 0 0 3.301-1.802l-3.203-3.203c-.425.308-.9.546-1.405.7A4.751 4.751 0 0 1 9.76 7.81c.466-.25.97-.416 1.489-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartDonutIconDuotone.displayName = "ChartDonutIconDuotone";
export { ChartDonutIconDuotone };
