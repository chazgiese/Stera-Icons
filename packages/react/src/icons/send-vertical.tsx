import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendVertical = memo(
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
          d="M9.988 2.79c.829-1.659 3.196-1.659 4.025 0l8.1 16.199c.984 1.97-1.156 4.035-3.09 2.981L12 18.14 4.977 21.97C3.044 23.024.904 20.96 1.888 18.99zm-6.31 17.092a.23.23 0 0 0-.029.157.27.27 0 0 0 .078.135.27.27 0 0 0 .138.073.23.23 0 0 0 .156-.033l6.98-3.808V5.236zM13 16.407l6.979 3.807a.23.23 0 0 0 .156.033.27.27 0 0 0 .138-.073.27.27 0 0 0 .078-.135.24.24 0 0 0-.028-.157L13 5.236z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendVertical.displayName = "SendVertical";
export { SendVertical };
