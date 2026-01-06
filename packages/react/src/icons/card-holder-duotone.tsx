import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CardHolderIconDuotone = memo(
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
          d="M18.8 3.25c.547 0 1.004-.001 1.375.03.38.03.736.098 1.073.27.517.263.938.685 1.202 1.202.172.337.24.693.27 1.073.031.371.03.828.03 1.375V11a.75.75 0 0 0-.75-.75h-.75v-2H2.75v2H2a.75.75 0 0 0-.75.75V7.2c0-.547-.001-1.004.03-1.375.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 2.752 3.55c.337-.172.693-.24 1.073-.27.371-.031.828-.03 1.375-.03zM5.2 4.75c-.572 0-.957 0-1.253.024-.287.024-.424.067-.514.113a1.25 1.25 0 0 0-.546.546c-.046.09-.09.227-.113.514-.017.21-.02.467-.022.803h18.496a11 11 0 0 0-.022-.803c-.024-.287-.067-.424-.113-.514a1.25 1.25 0 0 0-.546-.546c-.09-.046-.227-.09-.514-.113-.296-.024-.68-.024-1.253-.024z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.5 10.25a.75.75 0 0 1 .75.75 2.75 2.75 0 1 0 5.5 0 .75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5c0 .688.001 1.249-.036 1.703-.038.463-.12.882-.319 1.273a3.25 3.25 0 0 1-1.42 1.42c-.39.199-.809.28-1.272.318-.454.037-1.015.036-1.703.036H6c-.688 0-1.249.001-1.703-.036-.463-.038-.882-.12-1.273-.319a3.25 3.25 0 0 1-1.42-1.42c-.199-.39-.28-.809-.318-1.272C1.25 17.25 1.25 16.688 1.25 16v-5a.75.75 0 0 1 .75-.75zM2.75 16c0 .712 0 1.202.031 1.581.03.37.086.57.16.714.167.329.435.597.764.765.144.073.344.129.714.159.38.03.869.031 1.581.031h12c.712 0 1.202 0 1.581-.031.37-.03.57-.086.714-.16.329-.167.597-.435.765-.764.073-.144.129-.344.159-.714.03-.38.031-.869.031-1.581v-4.25h-5.067a4.25 4.25 0 0 1-8.366 0H2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CardHolderIconDuotone.displayName = "CardHolderIconDuotone";
export { CardHolderIconDuotone };
