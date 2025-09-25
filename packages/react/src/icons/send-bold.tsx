import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendBold = memo(
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
          fillRule="evenodd"
          d="M19.178 2.112c1.675-.558 3.268 1.036 2.71 2.71L16.65 20.535c-.664 1.99-3.497 1.94-4.09-.072l-2.05-6.974-6.973-2.05c-2.013-.592-2.063-3.425-.072-4.089zM12.443 12.97l2.038 6.927c.015.053.035.07.046.077a.16.16 0 0 0 .088.026.16.16 0 0 0 .09-.023c.01-.007.03-.023.048-.075l4.62-13.862zM4.098 9.246c-.052.017-.068.039-.075.05A.16.16 0 0 0 4 9.384c0 .041.013.072.026.09.007.01.024.03.077.045l6.926 2.037 6.93-6.93z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendBold.displayName = "SendBold";
export { SendBold };
