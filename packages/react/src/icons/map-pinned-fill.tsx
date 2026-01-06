import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinnedIconFill = memo(
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
          d="M18 10.25c2.64 0 4.75 2.183 4.75 4.84 0 .858-.311 1.697-.718 2.436-.41.746-.947 1.445-1.468 2.038a18.7 18.7 0 0 1-2.082 2.01l-.01.009-.003.003h-.002q-.015.012-.03.02a1 1 0 0 1-.114.068l-.044.02a.7.7 0 0 1-.216.052l-.006.001-.057.003q-.02 0-.04-.003h-.012a.8.8 0 0 1-.224-.05l-.043-.021q-.02-.007-.04-.018l-.032-.02-.05-.034-.026-.017-.002-.001-.003-.003-.01-.009-.038-.03-.135-.113a18.655 18.655 0 0 1-1.908-1.867c-.522-.593-1.059-1.292-1.47-2.038-.406-.74-.717-1.578-.717-2.435 0-2.658 2.11-4.841 4.75-4.841m0 3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m8.72 3.003.082.007q.027.003.053.01l.065.013q.038.011.074.025.03.008.059.02.022.01.044.022.031.014.062.03l.012.008.01.005 6.152 3.69 6.152-3.69A1 1 0 0 1 23 4v6.648a6.7 6.7 0 0 0-2-1.576V5.766L16.342 8.56c-2.901.751-4.992 3.43-4.992 6.53 0 1.302.466 2.465.953 3.351.295.538.639 1.042.988 1.5l-4.625-2.775-6.151 3.691A1.001 1.001 0 0 1 1 20V8a1 1 0 0 1 .485-.857l6.667-4 .01-.005q.005-.005.012-.008.03-.016.061-.03l.044-.022q.03-.011.059-.02.037-.014.074-.025.032-.008.065-.013.026-.006.053-.01l.081-.007q.022-.001.043-.003h.025zM3 8.565v9.668l4.666-2.8V5.767z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapPinnedIconFill.displayName = "MapPinnedIconFill";
export { MapPinnedIconFill };
