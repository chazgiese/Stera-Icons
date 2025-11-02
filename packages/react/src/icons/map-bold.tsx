import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapIconBold = memo(
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
          d="m8.72 3.003.082.007q.027.003.053.01l.065.013q.038.011.074.025.03.008.059.02.022.01.044.022.031.014.062.03l.012.008.01.005 6.152 3.69 6.152-3.69A1 1 0 0 1 23 4v12a1 1 0 0 1-.485.857l-6.667 4-.011.005-.01.008q-.022.01-.04.019l-.078.036-.027.01a1 1 0 0 1-.094.03q-.035.009-.07.015l-.05.01-.08.006q-.027.002-.055.003l-.057-.003-.08-.007q-.024-.003-.048-.01-.036-.005-.07-.013-.048-.014-.094-.031l-.028-.01-.077-.036-.04-.019-.01-.008-.01-.005-6.153-3.691-6.151 3.691A1.001 1.001 0 0 1 1 20V8a1 1 0 0 1 .485-.857l6.667-4 .01-.005q.005-.005.012-.008.03-.016.061-.03l.044-.022q.03-.011.059-.02.037-.014.074-.025.032-.008.065-.013.026-.006.053-.01l.081-.007q.022-.001.043-.003h.025zM3 8.565v9.668l4.666-2.8V5.767zm6.667 6.869 4.666 2.8V8.564l-4.666-2.8zm6.666-6.869v9.668l4.667-2.8V5.767z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapIconBold.displayName = "MapIconBold";
export { MapIconBold };
