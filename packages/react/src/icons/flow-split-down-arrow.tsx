import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitDownArrow = memo(
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
          d="M12 1.25a3.75 3.75 0 0 1 .75 7.425v3.575H15A4.75 4.75 0 0 1 19.75 17v3.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a1 1 0 0 1-.113.092q-.022.013-.044.024-.04.025-.084.045-.033.013-.068.022-.036.012-.073.021l-.005.001a.8.8 0 0 1-.284 0h-.01q-.036-.01-.07-.022-.035-.009-.069-.022-.043-.02-.084-.044l-.044-.025a1 1 0 0 1-.112-.092l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V17A3.25 3.25 0 0 0 15 13.75H9A3.25 3.25 0 0 0 5.75 17v3.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a1 1 0 0 1-.113.092q-.022.013-.044.024-.04.025-.084.045-.033.013-.068.022-.036.012-.073.021l-.005.001a.8.8 0 0 1-.284 0h-.01q-.02-.007-.041-.013c-.033-.01-.066-.017-.098-.03q-.043-.02-.084-.046-.022-.011-.044-.024a1 1 0 0 1-.112-.092l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V17A4.75 4.75 0 0 1 9 12.25h2.25V8.675A3.751 3.751 0 0 1 12 1.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitDownArrow.displayName = "FlowSplitDownArrow";
export { FlowSplitDownArrow };
