import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PhoneOutgoingIconFilltone = memo(
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
          d="M6.706 2.02c.47.075.832.34 1.092.677l.106.149.02.03.017.032L9.459 5.67c.305.548.529 1.014.656 1.419.129.413.188.858.043 1.308-.14.435-.425.723-.618.901-.251.233-.346.293-.571.518-.056.056-.07.082-.052.191.03.171.148.438.405.797.517.724 1.289 1.419 1.873 2.003s1.278 1.355 2.003 1.873c.358.256.625.374.796.404.11.019.136.004.192-.052.225-.224.284-.32.517-.57.179-.194.466-.48.902-.62.45-.144.895-.085 1.307.045.404.127.869.35 1.415.653l2.765 1.52.032.018.03.02c.408.264.74.66.826 1.197.078.495-.084.929-.247 1.232-.311.578-.887 1.14-1.27 1.524-1.268 1.267-2.726 1.925-4.322 1.95-1.566.022-3.15-.567-4.7-1.565a25 25 0 0 1-4.337-3.553 25 25 0 0 1-3.538-4.322C2.567 11.009 1.978 9.426 2 7.86c.024-1.597.683-3.055 1.95-4.322.383-.383.946-.96 1.524-1.27.303-.163.737-.326 1.231-.247"
        />
        <path
          fill="currentColor"
          d="M20 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-4.793 4.793a1 1 0 0 1-1.414-1.414L17.586 5H14a1 1 0 0 1 0-2z"
          opacity={0.32}
        />
      </svg>
    ))
);
PhoneOutgoingIconFilltone.displayName = "PhoneOutgoingIconFilltone";
export { PhoneOutgoingIconFilltone };
