import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextBolden = memo(
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
          d="M12.5 2.25a5.25 5.25 0 0 1 3.45 9.204A5.251 5.251 0 0 1 14.5 21.75H9.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375V6.143c0-.522 0-.955.027-1.309.029-.362.09-.703.245-1.027a2.75 2.75 0 0 1 1.285-1.285c.324-.156.665-.216 1.027-.245.354-.027.787-.027 1.309-.027zm-3.3 10.5c-.572 0-.957 0-1.253.024-.287.024-.424.067-.514.113a1.25 1.25 0 0 0-.546.546c-.046.09-.09.227-.113.514-.024.296-.024.68-.024 1.253v2.6c0 .572 0 .957.024 1.253.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024h5.3a3.75 3.75 0 1 0 0-7.5zm-.057-9c-.545 0-.91 0-1.193.022-.274.022-.405.06-.492.102a1.25 1.25 0 0 0-.584.584c-.042.087-.08.218-.102.492-.021.282-.022.648-.022 1.193v2.714c0 .545 0 .91.022 1.193.022.273.06.405.102.492.123.255.329.461.584.584.087.042.218.08.492.101.282.022.648.023 1.193.023H12.5a3.75 3.75 0 1 0 0-7.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TextBolden.displayName = "TextBolden";
export { TextBolden };
