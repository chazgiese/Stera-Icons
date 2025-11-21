import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIcon = memo(
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
          d="M1.25 12a3.75 3.75 0 0 0 7.425.75h3.575V17A2.75 2.75 0 0 0 15 19.75h5.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a1 1 0 0 0 .092-.113q.013-.022.024-.044.025-.04.045-.084.013-.034.022-.068.012-.036.021-.074l.001-.005a.8.8 0 0 0 0-.284v-.009q-.01-.036-.022-.07-.009-.036-.022-.07-.02-.043-.044-.083l-.025-.044a1 1 0 0 0-.092-.112l-3-3a.75.75 0 0 0-1.06 1.06l1.72 1.72H15c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h5.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a1 1 0 0 0 .092-.113q.013-.022.024-.044.025-.04.045-.084.013-.033.022-.068.012-.036.021-.074l.001-.005a.8.8 0 0 0 0-.284V4.85q-.007-.022-.013-.042c-.01-.034-.017-.067-.03-.098q-.02-.044-.046-.084-.011-.023-.024-.044a1 1 0 0 0-.092-.112l-3-3a.75.75 0 0 0-1.06 1.06l1.72 1.72H15A2.75 2.75 0 0 0 12.25 7v4.25H8.675A3.751 3.751 0 0 0 1.25 12m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowRightIcon.displayName = "FlowSplitArrowRightIcon";
export { FlowSplitArrowRightIcon };
