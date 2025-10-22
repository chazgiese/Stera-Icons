import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PhoneIncomingIconFilled = memo(
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
          d="M6.706 2.02c.47.075.832.34 1.092.677l.106.149.02.03.017.032 1.518 2.76c.305.55.529 1.015.656 1.42.129.412.188.857.043 1.307-.14.436-.425.723-.618.902-.251.233-.346.293-.571.517-.056.056-.07.082-.052.192.03.17.148.438.405.797.517.724 1.289 1.418 1.873 2.002.584.585 1.278 1.356 2.003 1.874.358.256.625.374.796.404.11.019.136.004.192-.052.225-.225.284-.32.517-.571.179-.193.466-.478.902-.618.45-.145.895-.086 1.307.044.404.126.869.35 1.415.653l2.765 1.52.032.018.03.02c.408.264.74.66.826 1.197.078.494-.084.928-.247 1.231-.311.578-.887 1.141-1.27 1.525-1.268 1.266-2.726 1.925-4.322 1.949-1.566.023-3.15-.566-4.7-1.565a25 25 0 0 1-4.337-3.552 25 25 0 0 1-3.538-4.323C2.567 11.01 1.978 9.425 2 7.86c.024-1.596.683-3.054 1.95-4.321.383-.384.946-.96 1.524-1.27.303-.163.737-.326 1.231-.248"
        />
        <path
          fill="currentColor"
          d="M19.793 2.793a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586z"
        />
      </svg>
    ))
);
PhoneIncomingIconFilled.displayName = "PhoneIncomingIconFilled";
export { PhoneIncomingIconFilled };
