import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubicGraphIconDuotone = memo(
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
          <path d="M12.005 20.209a.75.75 0 0 1 .75.75v.047a.75.75 0 0 1-1.5 0v-.047a.75.75 0 0 1 .75-.75M12.005 17.209a.75.75 0 0 1 .75.75v.094a.75.75 0 0 1-1.5 0v-.094a.75.75 0 0 1 .75-.75M12.005 14.209a.75.75 0 0 1 .75.75v.094a.75.75 0 0 1-1.5 0v-.094a.75.75 0 0 1 .75-.75M12.651 11.56a.74.74 0 0 1-.022.906.75.75 0 0 1-.783.32q.12-.19.243-.377.28-.43.562-.849M3.047 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM6.047 11.25a.75.75 0 0 1 0 1.5h-.094a.75.75 0 0 1 0-1.5zM9.047 11.25a.75.75 0 0 1 0 1.5h-.094a.75.75 0 0 1 0-1.5zM15.047 11.25a.75.75 0 0 1 0 1.5h-.094a.75.75 0 0 1 0-1.5zM18.047 11.25a.75.75 0 0 1 0 1.5h-.094a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-.047a.75.75 0 0 1 0-1.5zM12.005 8.209a.75.75 0 0 1 .743.657 26 26 0 0 0-.7.934l-.043.003a.75.75 0 0 1-.75-.75v-.094a.75.75 0 0 1 .75-.75M12.005 5.209a.75.75 0 0 1 .75.75v.094a.75.75 0 0 1-1.5 0v-.094a.75.75 0 0 1 .75-.75M12.005 2.256a.75.75 0 0 1 .75.75v.047a.75.75 0 0 1-1.5 0v-.047a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 4.25a.75.75 0 0 1 0 1.5c-4.188 0-6.612 3.128-8.911 6.66-1.114 1.71-2.212 3.534-3.436 4.903C7.415 18.697 5.933 19.75 4 19.75l-.04-.001h-.006l-.104-.001-.689.001-.114.001h-.044a.75.75 0 0 1-.006-1.5h.044l.115-.001.698-.001.117.001h.035c1.315-.002 2.421-.698 3.53-1.936 1.123-1.257 2.131-2.933 3.296-4.722C13.09 8.122 15.915 4.25 21 4.25M3.783 19.718q.02.005.038.008-.038-.009-.073-.02zm-.238-.122q.02.014.04.027l-.053-.04zm-.175-1.003-.004.01.011-.019zm.234-.23-.008.006q.03-.017.061-.033zm.123-.061-.015.007z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CubicGraphIconDuotone.displayName = "CubicGraphIconDuotone";
export { CubicGraphIconDuotone };
