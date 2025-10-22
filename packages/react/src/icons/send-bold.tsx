import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIconBold = memo(
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
          d="M19.178 2.112c1.675-.558 3.268 1.035 2.71 2.71L16.65 20.533c-.664 1.991-3.497 1.941-4.09-.072l-2.05-6.973-6.973-2.05c-2.013-.593-2.063-3.426-.072-4.09zm.632 1.897L4.098 9.245c-.052.018-.068.04-.075.05A.16.16 0 0 0 4 9.384c0 .04.013.072.026.089.007.01.024.03.077.046l6.926 2.037 4.264-4.264a1 1 0 0 1 1.414 1.414l-4.264 4.264 2.038 6.927c.015.053.035.07.046.077a.16.16 0 0 0 .088.025.16.16 0 0 0 .09-.022c.01-.008.03-.024.048-.075L19.99 4.19a.13.13 0 0 0 .006-.08.15.15 0 0 0-.04-.067.15.15 0 0 0-.067-.04.13.13 0 0 0-.08.006"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.178 2.113c1.675-.557 3.268 1.036 2.71 2.711L16.65 20.535c-.664 1.991-3.497 1.941-4.09-.072l-2.05-6.974-6.973-2.05c-2.013-.592-2.063-3.425-.072-4.088zm.632 1.898L4.098 9.247c-.052.018-.068.04-.075.05A.16.16 0 0 0 4 9.386c0 .04.013.072.026.089.007.01.024.03.077.046l6.926 2.037 4.264-4.264a1 1 0 0 1 1.414 1.414l-4.264 4.264 2.038 6.927c.015.052.035.07.046.077a.16.16 0 0 0 .088.025.16.16 0 0 0 .09-.022c.01-.008.03-.024.048-.075L19.99 4.192a.13.13 0 0 0 .006-.08.15.15 0 0 0-.04-.067.15.15 0 0 0-.067-.04.13.13 0 0 0-.08.006"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendIconBold.displayName = "SendIconBold";
export { SendIconBold };
