import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CupIconFilled = memo(
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
          d="M10.5 3c2.4 0 4.606.228 6.24.612.808.19 1.532.432 2.078.736C19.28 4.604 20 5.122 20 6q0 .088-.01.176l-.133 1.843A3.5 3.5 0 0 1 19.5 15h-.273a8 8 0 0 1-7.745 6H9.518a8 8 0 0 1-7.98-7.43L1.01 6.176A2 2 0 0 1 1 6c0-.878.72-1.396 1.182-1.652.546-.304 1.27-.545 2.079-.736C5.894 3.228 8.099 3 10.5 3m9.002 9.999a1.5 1.5 0 0 0 .213-2.982zM10.5 5c-2.294 0-4.338.22-5.781.56-.596.14-1.053.292-1.371.438.324.15.789.305 1.397.447C6.187 6.781 8.22 7 10.5 7s4.312-.219 5.754-.555c.608-.141 1.074-.297 1.397-.446-.318-.146-.774-.3-1.37-.44C14.838 5.22 12.794 5 10.5 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CupIconFilled.displayName = "CupIconFilled";
export { CupIconFilled };
