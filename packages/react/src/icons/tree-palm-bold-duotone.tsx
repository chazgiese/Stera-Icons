import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreePalmIconBoldDuotone = memo(
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
          d="M14.28 1.822C16.787.368 19.906.9 21.747 2.975a1 1 0 0 1-.246 1.53l-3.878 2.247a6 6 0 0 1 1.097.498c2.507 1.454 3.604 4.428 2.737 7.063a1 1 0 0 1-1.451.552L12 10.222l-8.007 4.643a1 1 0 0 1-1.451-.552c-.868-2.635.23-5.609 2.737-7.063q.534-.308 1.096-.498L2.498 4.504a1 1 0 0 1-.246-1.53C4.093.9 7.212.369 9.72 1.823A6.1 6.1 0 0 1 12 4.15a6.1 6.1 0 0 1 2.28-2.327M9.674 8.665a4.02 4.02 0 0 0-3.393.315 4.06 4.06 0 0 0-2.032 3.423l5.935-3.442zm8.043.315a4.02 4.02 0 0 0-3.394-.315l-.51.296 5.935 3.442a4.05 4.05 0 0 0-2.031-3.423m-9-5.427a4.01 4.01 0 0 0-3.966-.055l5.847 3.39.15.088a4.05 4.05 0 0 0-2.031-3.423m10.529-.055a4.01 4.01 0 0 0-3.965.055 4.06 4.06 0 0 0-2.032 3.423l.151-.087z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.13 10.877c.114 2.712-.004 6.367-2.211 11.517a1 1 0 1 1-1.838-.788c2.11-4.922 2.162-8.229 2.036-10.874l.883-.51z"
        />
      </svg>
    ))
);
TreePalmIconBoldDuotone.displayName = "TreePalmIconBoldDuotone";
export { TreePalmIconBoldDuotone };
