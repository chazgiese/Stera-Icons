import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIcon = memo(
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
          d="M12 22.75a3.75 3.75 0 0 0 .75-7.425V11.75H17A2.75 2.75 0 0 0 19.75 9V3.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a1 1 0 0 0-.113-.092q-.022-.014-.044-.024-.04-.025-.084-.045-.033-.013-.068-.022-.036-.012-.073-.021l-.005-.001a.8.8 0 0 0-.284 0h-.01q-.036.01-.07.022-.035.009-.069.022-.043.02-.084.045-.022.011-.044.024a1 1 0 0 0-.112.092l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V9c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V3.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a1 1 0 0 0-.113-.092q-.022-.014-.044-.024-.04-.025-.084-.045-.033-.013-.068-.022-.036-.012-.073-.021l-.005-.001a.8.8 0 0 0-.284 0h-.01q-.02.007-.041.013c-.033.01-.066.017-.098.03q-.043.02-.084.046-.022.011-.044.024a1 1 0 0 0-.112.092l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V9A2.75 2.75 0 0 0 7 11.75h4.25v3.575A3.751 3.751 0 0 0 12 22.75m0-1.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowUpIcon.displayName = "FlowSplitArrowUpIcon";
export { FlowSplitArrowUpIcon };
