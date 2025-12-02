import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PieIcon = memo(
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
          d="M9.47 7.47a.75.75 0 0 1 1.06 1.06l-1 1a.75.75 0 0 1-1.06-1.06zM13.47 7.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25c4.97 0 9.099 2.808 10.493 6.785.207.593.267 1.356-.121 2.031a3.35 3.35 0 0 1-2.038 1.576q-.033.142-.082.283l-1.072 3a2.75 2.75 0 0 1-2.59 1.825H7.41a2.75 2.75 0 0 1-2.59-1.825l-1.071-3a3 3 0 0 1-.083-.283 3.35 3.35 0 0 1-2.037-1.576c-.388-.675-.328-1.438-.12-2.03C2.9 7.057 7.03 4.25 11.998 4.25m5 9.337a3.28 3.28 0 0 1-2.5 1.163 3.28 3.28 0 0 1-2.5-1.163 3.28 3.28 0 0 1-2.5 1.163A3.28 3.28 0 0 1 7 13.587a3.3 3.3 0 0 1-1.753 1.073l.985 2.76c.178.497.649.83 1.177.83h9.181a1.25 1.25 0 0 0 1.177-.83l.986-2.76A3.3 3.3 0 0 1 17 13.587M12 5.75c-4.423 0-7.923 2.486-9.078 5.781-.117.335-.094.61.007.787a1.82 1.82 0 0 0 1.57.932c.835 0 1.564-.593 1.773-1.432a.75.75 0 0 1 1.456 0c.21.84.937 1.432 1.772 1.432s1.563-.593 1.772-1.432a.75.75 0 0 1 1.456 0c.21.84.937 1.432 1.771 1.432.835 0 1.564-.593 1.773-1.432a.75.75 0 0 1 1.456 0c.21.84.937 1.432 1.771 1.432q.06 0 .116-.004c.609-.04 1.15-.394 1.456-.928.101-.176.124-.452.007-.787C19.923 8.236 16.422 5.751 12 5.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIcon.displayName = "PieIcon";
export { PieIcon };
