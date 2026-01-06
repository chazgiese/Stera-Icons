import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowerIconFill = memo(
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
          d="M12.88 2.946c1.215-1.004 2.914-1.336 4.616-.366 1.706.972 2.27 2.602 1.994 4.155-.073.414-.208.82-.39 1.209a5 5 0 0 1 1.263.271C21.847 8.75 23 10.042 23 12.001c0 1.958-1.154 3.249-2.638 3.783a5 5 0 0 1-1.263.27c.182.388.317.796.391 1.21.276 1.553-.288 3.183-1.994 4.156-1.702.97-3.4.637-4.615-.367a5 5 0 0 1-.882-.96c-.253.359-.548.684-.88.96-1.214 1.004-2.912 1.338-4.614.368-1.705-.973-2.27-2.603-1.995-4.156a4.9 4.9 0 0 1 .39-1.212 5 5 0 0 1-1.262-.27C2.154 15.25 1 13.96 1 12.002c0-1.959 1.153-3.25 2.637-3.786a5 5 0 0 1 1.263-.27 4.9 4.9 0 0 1-.39-1.211c-.276-1.553.29-3.183 1.995-4.155 1.702-.97 3.4-.636 4.614.368.332.275.627.6.88.959.253-.36.55-.685.882-.96M12 9.048a3.04 3.04 0 0 0-2.6 1.481 2.9 2.9 0 0 0 0 2.94 3.01 3.01 0 0 0 2.602 1.48 3.04 3.04 0 0 0 2.6-1.478c.516-.883.551-2 0-2.942A3.01 3.01 0 0 0 12 9.049"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowerIconFill.displayName = "FlowerIconFill";
export { FlowerIconFill };
