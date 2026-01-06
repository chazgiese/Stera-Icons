import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PieIconBoldDuotone = memo(
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
          <path d="M9.293 7.543a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 0 1-1.414-1.414zM13.293 7.543a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M6.469 17.337A1 1 0 0 0 7.41 18h9.18a1 1 0 0 0 .943-.663l.894-2.505a3.5 3.5 0 0 0 2.12.007l-1.131 3.17A3 3 0 0 1 16.591 20H7.41a3 3 0 0 1-2.826-1.991l-1.132-3.17a3.5 3.5 0 0 0 2.12-.008z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4c5.061 0 9.294 2.861 10.728 6.952.223.636.297 1.48-.14 2.238a3.58 3.58 0 0 1-2.68 1.787Q19.705 15 19.5 15a3.52 3.52 0 0 1-2.5-1.046A3.52 3.52 0 0 1 14.5 15a3.52 3.52 0 0 1-2.5-1.046A3.52 3.52 0 0 1 9.5 15 3.52 3.52 0 0 1 7 13.954a3.52 3.52 0 0 1-2.907 1.023A3.58 3.58 0 0 1 1.41 13.19c-.436-.758-.363-1.602-.14-2.238C2.705 6.862 6.94 4 12 4m0 2c-4.332 0-7.727 2.432-8.842 5.613-.102.292-.066.488-.013.581.255.443.69.74 1.178.796q.087.01.177.01c.712 0 1.346-.507 1.53-1.242a1 1 0 0 1 1.94 0C8.155 12.493 8.788 13 9.5 13c.712 0 1.346-.507 1.53-1.242a1 1 0 0 1 1.94 0c.184.735.817 1.242 1.53 1.242.712 0 1.346-.507 1.53-1.242a1 1 0 0 1 1.94 0c.184.735.817 1.242 1.53 1.242q.09 0 .176-.01a1.58 1.58 0 0 0 1.178-.796c.054-.093.09-.289-.012-.58C19.726 8.431 16.332 6 12 6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
PieIconBoldDuotone.displayName = "PieIconBoldDuotone";
export { PieIconBoldDuotone };
