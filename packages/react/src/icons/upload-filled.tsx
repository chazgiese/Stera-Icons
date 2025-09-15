import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UploadFilled = memo(
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
          d="M21 14a1 1 0 0 1 1 1l-.005 1.248a19 19 0 0 1-.035 1.01c-.042.608-.13 1.146-.34 1.655a5 5 0 0 1-2.707 2.706c-.51.211-1.048.3-1.656.341-.6.041-1.339.04-2.257.04H9l-1.248-.005a19 19 0 0 1-1.009-.035c-.608-.041-1.147-.13-1.656-.34a5 5 0 0 1-2.706-2.707c-.211-.51-.3-1.047-.341-1.656q-.029-.448-.035-1.009L2 15a1 1 0 1 1 2 0l.005 1.22c.005.348.014.642.031.9.035.507.1.803.193 1.029a3 3 0 0 0 1.623 1.623c.225.093.521.158 1.028.192.258.018.552.027.9.031L9 20h6c.945 0 1.604 0 2.12-.036.507-.034.803-.099 1.028-.192a3 3 0 0 0 1.624-1.623c.093-.226.157-.522.192-1.029.018-.258.027-.552.031-.9L20 15a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M11.37 2.225a1 1 0 0 1 1.337.068l6 6A1 1 0 0 1 18 10h-5v6a1 1 0 0 1-2 0v-6H6a1 1 0 0 1-.707-1.707l6-6z"
        />
      </svg>
    ))
);
UploadFilled.displayName = "UploadFilled";
export { UploadFilled };
