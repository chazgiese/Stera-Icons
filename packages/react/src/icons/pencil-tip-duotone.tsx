import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PencilTipIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M5.75 12.713V22a.75.75 0 0 1-1.5 0v-9.97l.001-.066zM19.75 12.03V22a.75.75 0 0 1-1.5 0v-9.287l1.499-.75zM8.384 5.428a.8.8 0 0 0 .136.148l.439.366q.286.236.596.422l-3.331 4.284q-.175.223-.287.48l-1.342-.669.094-.191q.151-.285.351-.541zM15.616 5.428l3.344 4.299q.266.342.445.732l-1.343.67a2.2 2.2 0 0 0-.286-.481l-3.332-4.284q.311-.185.597-.422l.44-.366a.8.8 0 0 0 .135-.148" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m16.559 11.882 2.846-1.423c.217.47.335.982.345 1.505l-2.52 1.26a2.75 2.75 0 0 1-2.46 0l-2.02-1.011V22a.75.75 0 0 1-1.5 0v-9.787l-2.02 1.01a2.75 2.75 0 0 1-2.46 0l-2.52-1.26c.01-.522.128-1.034.345-1.504l2.846 1.423a1.25 1.25 0 0 0 1.118 0l2.212-1.106a2.75 2.75 0 0 1 2.458 0l2.213 1.106a1.25 1.25 0 0 0 1.117 0M8.384 5.427a.8.8 0 0 0 .136.15l.44.365a4.75 4.75 0 0 0 6.081 0l.44-.366a.8.8 0 0 0 .135-.148l-3.024-3.889a.75.75 0 0 0-1.127-.064l-.057.064z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PencilTipIconDuotone.displayName = "PencilTipIconDuotone";
export { PencilTipIconDuotone };
