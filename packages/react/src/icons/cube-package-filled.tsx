import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CubePackageFilled = memo(
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
          d="M18.494 9.535c.145.586.136 1.237.136 2.083V13a1 1 0 1 1-2 0v-1.382c0-.47-.003-.798-.013-1.04L13 12.588v9.734h.007c.786-.162 1.51-.576 2.587-1.174l2.6-1.445c1.137-.632 1.912-1.048 2.483-1.668a5 5 0 0 0 1.071-1.82c.264-.8.252-1.68.252-2.98v-2.47c0-1.3.012-2.18-.252-2.98l-.017-.048zM2.252 7.785c-.264.8-.252 1.68-.252 2.98v2.47c0 1.301-.012 2.18.252 2.98a5 5 0 0 0 1.071 1.82c.571.62 1.346 1.036 2.484 1.668l2.6 1.445c1.077.598 1.8 1.012 2.586 1.173l.007.001v-9.734l-8.73-4.85q-.01.023-.018.047M5.807 4.297c-1.138.632-1.913 1.048-2.484 1.668l-.04.047L12 10.856l3.625-2.015c-.21-.13-.507-.298-.95-.544L6.643 3.832zM13.007 1.679a5 5 0 0 0-2.014 0c-.712.146-1.372.5-2.292 1.01l6.946 3.859c.805.447 1.411.774 1.868 1.243l3.204-1.78-.042-.046c-.571-.62-1.346-1.036-2.483-1.668l-2.6-1.444c-1.078-.6-1.8-1.012-2.587-1.174"
        />
      </svg>
    ))
);
CubePackageFilled.displayName = "CubePackageFilled";
export { CubePackageFilled };
