import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesIconDuotone = memo(
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
          d="M18.88 1.393a.125.125 0 0 1 .24 0l.192.633a4 4 0 0 0 2.662 2.662l.633.192a.125.125 0 0 1 0 .24l-.633.192a4 4 0 0 0-2.662 2.662l-.193.633a.125.125 0 0 1-.239 0l-.192-.633a4 4 0 0 0-2.662-2.662l-.633-.193a.125.125 0 0 1 0-.239l.633-.192a4 4 0 0 0 2.662-2.662z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 4.25a.75.75 0 0 1 .718.531l.741 2.436a7.25 7.25 0 0 0 4.824 4.824l2.436.741a.75.75 0 0 1 0 1.436l-2.436.741a7.25 7.25 0 0 0-4.824 4.824l-.741 2.436a.75.75 0 0 1-1.436 0l-.741-2.436a7.25 7.25 0 0 0-4.824-4.824l-2.436-.741a.75.75 0 0 1 0-1.436l2.436-.741A7.25 7.25 0 0 0 9.04 7.217l.741-2.436.045-.113a.75.75 0 0 1 .673-.418m-.023 3.403a8.75 8.75 0 0 1-5.824 5.824l-.077.023.077.023a8.75 8.75 0 0 1 5.824 5.824l.023.076.023-.076a8.75 8.75 0 0 1 5.824-5.824l.076-.023-.076-.023a8.75 8.75 0 0 1-5.824-5.824l-.023-.077z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparklesIconDuotone.displayName = "SparklesIconDuotone";
export { SparklesIconDuotone };
