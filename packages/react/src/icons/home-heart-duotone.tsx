import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HomeHeartIconDuotone = memo(
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
          d="M9.697 2.841a3.75 3.75 0 0 1 4.606 0l6 4.666a3.75 3.75 0 0 1 1.447 2.96V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-7.533a3.75 3.75 0 0 1 1.447-2.96zm3.685 1.184a2.25 2.25 0 0 0-2.764 0l-6 4.667a2.25 2.25 0 0 0-.868 1.775V18A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-7.533c0-.694-.32-1.35-.868-1.775z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.904 9.25c1.565 0 2.846 1.259 2.846 2.826 0 1.155-.622 2.031-.83 2.319-1.03 1.43-2.474 2.416-3.454 3.193a.75.75 0 0 1-.932 0c-.98-.777-2.424-1.764-3.455-3.193-.207-.288-.829-1.164-.829-2.319 0-1.567 1.28-2.826 2.846-2.826.732 0 1.4.277 1.904.73a2.84 2.84 0 0 1 1.904-.73m0 1.5c-.545 0-1.012.32-1.223.776a.75.75 0 0 1-1.362 0 1.35 1.35 0 0 0-1.223-.776c-.75 0-1.346.6-1.346 1.326 0 .64.356 1.178.545 1.44.751 1.043 1.745 1.793 2.705 2.534.89-.687 1.808-1.382 2.536-2.31l.168-.223c.19-.263.546-.8.546-1.44 0-.727-.596-1.327-1.346-1.327"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HomeHeartIconDuotone.displayName = "HomeHeartIconDuotone";
export { HomeHeartIconDuotone };
