import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowerIconFilltone = memo(
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
          d="M6.505 2.579c1.702-.97 3.4-.636 4.614.368.332.275.627.6.88.959.253-.36.55-.685.882-.96 1.214-1.004 2.913-1.336 4.615-.366 1.705.972 2.27 2.603 1.994 4.155-.073.414-.208.82-.39 1.21a5 5 0 0 1 1.263.27C21.847 8.75 23 10.043 23 12.002c0 1.958-1.154 3.249-2.638 3.783a5 5 0 0 1-1.263.27c.182.389.317.796.391 1.21.276 1.553-.289 3.183-1.994 4.156-1.702.97-3.4.637-4.615-.367a5 5 0 0 1-.882-.96c-.253.36-.548.684-.88.96-1.214 1.004-2.912 1.338-4.614.368-1.705-.973-2.27-2.603-1.995-4.156.073-.414.208-.822.39-1.212a5 5 0 0 1-1.262-.269c-1.391-.5-2.492-1.666-2.624-3.424L1 12c0-1.958 1.153-3.25 2.637-3.784a5 5 0 0 1 1.263-.27 4.9 4.9 0 0 1-.39-1.212c-.276-1.553.29-3.183 1.995-4.155M12 7.999A4 4 0 1 0 12 16a4 4 0 0 0 0-8"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
FlowerIconFilltone.displayName = "FlowerIconFilltone";
export { FlowerIconFilltone };
