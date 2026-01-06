import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseIcon = memo(
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
          d="M9 14.25q.067 0 .13.012.01 0 .018.003.02.005.04.011.05.013.098.03a.75.75 0 0 1 .363.324q.024.04.043.083A.8.8 0 0 1 9.75 15v4a.75.75 0 0 1-1.5 0v-2.19l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72H5a.75.75 0 0 1 0-1.5zM19 14.25a.75.75 0 0 1 0 1.5h-2.19l3.72 3.72a.75.75 0 1 1-1.06 1.06l-3.72-3.72V19a.75.75 0 0 1-1.5 0v-4a.8.8 0 0 1 .055-.282l.004-.01q.018-.04.042-.078a.8.8 0 0 1 .119-.16.8.8 0 0 1 .16-.12q.037-.023.078-.041l.01-.004q.046-.018.094-.029.019-.006.039-.011l.016-.003A1 1 0 0 1 15 14.25zM3.47 3.47a.75.75 0 0 1 1.06 0l3.72 3.72V5a.75.75 0 1 1 1.5 0v4a.75.75 0 0 1-.136.428 1 1 0 0 1-.084.102.8.8 0 0 1-.244.162q-.048.02-.098.03-.02.007-.04.012-.008.002-.017.003l-.055.01L9 9.75H5a.75.75 0 0 1 0-1.5h2.19L3.47 4.53a.75.75 0 0 1 0-1.06M19.47 3.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H19a.75.75 0 0 1 0 1.5h-4l-.077-.004q-.028-.003-.056-.009l-.016-.003q-.02-.005-.04-.011-.05-.012-.098-.03-.044-.02-.083-.044a.8.8 0 0 1-.16-.119.75.75 0 0 1-.22-.53V5a.75.75 0 0 1 1.5 0v2.19z"
        />
      </svg>
    ))
);
CollapseIcon.displayName = "CollapseIcon";
export { CollapseIcon };
