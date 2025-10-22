import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowLeftIcon = memo(
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
          d="M22.75 12a3.75 3.75 0 0 1-7.425.75H11.75V17A2.75 2.75 0 0 1 9 19.75H3.81l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a1 1 0 0 1-.092-.113q-.014-.022-.024-.044-.026-.04-.045-.084-.013-.034-.022-.068-.012-.036-.021-.074l-.001-.005a.8.8 0 0 1 0-.284v-.009q.01-.036.022-.07.009-.036.022-.07.02-.043.045-.083.011-.023.024-.044a1 1 0 0 1 .092-.112l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H9c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a1 1 0 0 1-.092-.113q-.014-.022-.024-.044-.026-.04-.045-.084-.013-.033-.022-.068-.012-.036-.021-.074l-.001-.005a.8.8 0 0 1 0-.284V4.85q.007-.022.013-.042.013-.051.03-.098.02-.044.046-.084.011-.023.024-.044a1 1 0 0 1 .092-.112l3-3a.75.75 0 0 1 1.06 1.06L3.81 4.25H9A2.75 2.75 0 0 1 11.75 7v4.25h3.575a3.751 3.751 0 0 1 7.425.75m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowLeftIcon.displayName = "FlowSplitArrowLeftIcon";
export { FlowSplitArrowLeftIcon };
