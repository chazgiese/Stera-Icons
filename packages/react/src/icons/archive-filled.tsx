import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArchiveFilled = memo(
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
          d="M22 16.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H7.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C1.999 17.702 2 17.024 2 16.2V8.5h20zM9 12a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21.2 2c.123 0 .276-.001.41.01.108.009.253.029.41.085l.16.068.104.059c.201.123.37.292.494.494l.059.103.068.16c.056.158.076.303.085.412.011.133.01.285.01.409v1.4c0 .123.001.276-.01.41a1.5 1.5 0 0 1-.153.57 1.5 1.5 0 0 1-.656.657c-.218.11-.427.141-.572.153-.133.011-.286.01-.409.01H2.8c-.123 0-.276.001-.41-.01a1.5 1.5 0 0 1-.57-.153 1.5 1.5 0 0 1-.657-.656 1.5 1.5 0 0 1-.153-.572C.999 5.476 1 5.323 1 5.2V3.8c0-.124-.001-.276.01-.41.012-.145.042-.353.153-.57l.059-.104c.144-.235.35-.427.597-.553l.16-.068c.158-.056.303-.076.412-.085.133-.011.286-.01.409-.01z"
        />
      </svg>
    ))
);
ArchiveFilled.displayName = "ArchiveFilled";
export { ArchiveFilled };
