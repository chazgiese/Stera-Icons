import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIcon = memo(
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
          d="M8.47 14.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H8a.75.75 0 0 1 0 1.5H4a1 1 0 0 1-.133-.013l-.016-.003q-.02-.005-.04-.011-.05-.012-.098-.03-.044-.02-.083-.045a.8.8 0 0 1-.16-.118.7.7 0 0 1-.12-.16q-.024-.041-.043-.084A.8.8 0 0 1 3.25 20v-4a.75.75 0 0 1 1.5 0v2.19zM14.47 14.47a.75.75 0 0 1 1.06 0l3.72 3.72V16a.75.75 0 0 1 1.5 0v4a.8.8 0 0 1-.058.286q-.019.044-.044.083a.7.7 0 0 1-.118.161.7.7 0 0 1-.16.118q-.041.025-.084.044-.048.02-.099.03-.019.008-.039.012l-.016.003-.055.01-.077.003h-4a.75.75 0 0 1 0-1.5h2.19l-3.72-3.72a.75.75 0 0 1 0-1.06M8 3.25a.75.75 0 0 1 0 1.5H5.81l3.72 3.72a.75.75 0 1 1-1.06 1.06L4.75 5.81V8a.75.75 0 0 1-1.5 0V4a.8.8 0 0 1 .055-.282l.004-.01q.018-.04.042-.078a.8.8 0 0 1 .119-.16.8.8 0 0 1 .16-.12q.037-.023.078-.041l.01-.004q.046-.017.094-.029.019-.006.039-.011l.016-.003A1 1 0 0 1 4 3.25zM20 3.25q.067 0 .132.012l.016.003q.02.005.04.011.05.012.098.03.044.021.083.045.087.047.161.119a.8.8 0 0 1 .118.16q.025.04.044.083A.8.8 0 0 1 20.75 4v4a.75.75 0 0 1-1.5 0V5.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72H16a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ExpandIcon.displayName = "ExpandIcon";
export { ExpandIcon };
