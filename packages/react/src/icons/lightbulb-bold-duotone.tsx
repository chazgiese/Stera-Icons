import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconBoldDuotone = memo(
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
          d="M15.376 14.007a1 1 0 0 1 .841 1.28A4.8 4.8 0 0 0 16 16.657V19a3 3 0 0 1-2.212 2.892 1.998 1.998 0 0 1-3.576 0A3 3 0 0 1 8 19v-2.342c0-.454-.077-.908-.216-1.372A1 1 0 0 1 8.742 14h6.516zm-5.37 5.095A1 1 0 0 0 11 20h2a1 1 0 0 0 1-1h-4zM9.963 16q.035.324.036.658V17h4v-.342q.001-.334.037-.658z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 1a7 7 0 0 1 6.24 10.175c-.218.429-.455.854-.682 1.262-.562 1.009-1.06 1.913-1.34 2.838a1 1 0 0 0-.842-1.268L15.258 14h-.71c.355-.908.831-1.761 1.262-2.535.23-.414.449-.807.648-1.198a5 5 0 1 0-8.916 0c.2.39.418.784.648 1.198.43.774.907 1.627 1.261 2.535h-.709a1 1 0 0 0-.958 1.286c-.278-.93-.778-1.836-1.342-2.848-.227-.409-.463-.834-.682-1.263A7 7 0 0 1 12 1"
          opacity={0.4}
        />
      </svg>
    ))
);
LightbulbIconBoldDuotone.displayName = "LightbulbIconBoldDuotone";
export { LightbulbIconBoldDuotone };
