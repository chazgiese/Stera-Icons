import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDots = memo(
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
          d="M7.75 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.25 9.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.25c5.3 0 9.75 3.837 9.75 8.75S17.3 19.75 12 19.75c-1.04 0-2.044-.147-2.986-.419L6.28 20.698c-1.337.669-2.843-.539-2.48-1.989l.443-1.773.024-.087.01-.032.006-.023c.009-.03.006-.026.004-.01.001-.038-.006-.37-.513-1.082C2.813 14.35 2.25 12.735 2.25 11c0-4.913 4.45-8.75 9.75-8.75m0 1.5c-4.642 0-8.25 3.327-8.25 7.25 0 1.403.453 2.716 1.247 3.833.7.986.84 1.683.777 2.148a2 2 0 0 1-.05.228l-.026.092-.443 1.771a.25.25 0 0 0 .354.284l3-1.5a.75.75 0 0 1 .565-.043A9.3 9.3 0 0 0 12 18.25c4.642 0 8.25-3.326 8.25-7.25S16.642 3.75 12 3.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatBubbleDots.displayName = "ChatBubbleDots";
export { ChatBubbleDots };
