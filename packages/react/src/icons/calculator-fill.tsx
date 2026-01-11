import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalculatorIconFill = memo(
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
          d="M14.4 1.5c.972 0 1.73 0 2.34.05.614.05 1.12.153 1.576.386a4 4 0 0 1 1.749 1.748c.232.456.335.962.385 1.577.05.608.05 1.367.05 2.339v8.8c0 .972 0 1.73-.05 2.34-.05.614-.153 1.12-.386 1.576a4 4 0 0 1-1.748 1.749c-.456.232-.962.335-1.577.385-.608.05-1.367.05-2.339.05H9.6c-.972 0-1.73 0-2.34-.05-.614-.05-1.12-.153-1.576-.386a4 4 0 0 1-1.748-1.748c-.233-.456-.336-.962-.386-1.577-.05-.608-.05-1.367-.05-2.339V7.6c0-.972 0-1.73.05-2.34.05-.614.153-1.12.386-1.576a4 4 0 0 1 1.748-1.748c.456-.233.962-.336 1.577-.386.608-.05 1.367-.05 2.339-.05zM8 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-3.5a1 1 0 0 0-1 1V18a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 .995-.897L17 7V6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CalculatorIconFill.displayName = "CalculatorIconFill";
export { CalculatorIconFill };
