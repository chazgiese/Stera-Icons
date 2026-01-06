import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartDonutIconBoldDuotone = memo(
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
          d="M12.407 1.008a11 11 0 0 1 7.371 18.77 1 1 0 0 0 0-1.414l-.747-.747A9 9 0 0 0 20.645 9.5l-3.739 1.55a5 5 0 0 1-.002 1.926 5 5 0 0 1-.735 1.779l-.634-.634a1 1 0 0 0-1.414 0A3 3 0 0 0 12 9a1 1 0 0 0 1-1v-.896a5 5 0 0 1 2.037.925l.078.062a5 5 0 0 1 .562.524q.029.032.056.065.132.147.251.305l.018.023q.07.095.138.193l3.74-1.548A8.996 8.996 0 0 0 17 4.516a9 9 0 0 0-3.733-1.425L13 3.057V2a1 1 0 0 0-1-1q.204 0 .407.008"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 3 3 0 1 0 2.12 5.121 1 1 0 0 1 1.415 0l4.243 4.243a1 1 0 0 1 0 1.414 11.002 11.002 0 0 1-18.726-8.856A11 11 0 0 1 12 1m-1 2.057a9 9 0 0 0-7.957 8.061 9.002 9.002 0 0 0 14.573 7.913l-2.861-2.861a5.002 5.002 0 0 1-6.912-6.948A5 5 0 0 1 11 7.104z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartDonutIconBoldDuotone.displayName = "ChartDonutIconBoldDuotone";
export { ChartDonutIconBoldDuotone };
