import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CalculatorIconBoldDuotone = memo(
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
          d="M14.4 1c.964 0 1.747-.001 2.38.05.646.054 1.224.166 1.763.44a4.5 4.5 0 0 1 1.967 1.967c.274.539.386 1.117.44 1.763.051.633.05 1.416.05 2.38v8.8c0 .964.001 1.747-.05 2.38-.053.646-.166 1.224-.44 1.763a4.5 4.5 0 0 1-1.967 1.967c-.539.274-1.117.386-1.763.44-.633.051-1.416.05-2.38.05H9.6c-.964 0-1.747.001-2.38-.05-.646-.053-1.224-.166-1.763-.44a4.5 4.5 0 0 1-1.967-1.967c-.274-.539-.386-1.117-.44-1.763C3 18.147 3 17.364 3 16.4V7.6c0-.964-.001-1.747.05-2.38.054-.646.166-1.224.44-1.763A4.5 4.5 0 0 1 5.457 1.49c.539-.274 1.117-.386 1.763-.44C7.853 1 8.636 1 9.6 1zM9.6 3c-.997 0-1.684 0-2.217.044-.522.043-.808.122-1.018.228-.47.24-.853.623-1.093 1.093-.106.21-.185.496-.228 1.018C5 5.916 5 6.603 5 7.6v8.8c0 .997 0 1.684.044 2.217.043.522.122.808.228 1.018a2.5 2.5 0 0 0 1.093 1.092c.21.107.496.186 1.018.23C7.916 21 8.603 21 9.6 21h4.8c.997 0 1.684 0 2.217-.044.522-.043.808-.122 1.018-.229a2.5 2.5 0 0 0 1.092-1.092c.107-.21.186-.496.23-1.018.043-.533.043-1.22.043-2.217V7.6c0-.997 0-1.684-.044-2.217-.043-.522-.122-.808-.229-1.018a2.5 2.5 0 0 0-1.092-1.093c-.21-.106-.496-.185-1.018-.228C16.084 3 15.397 3 14.4 3z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 13.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1M8 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2M16 5a1 1 0 0 1 1 1v1l-.005.103A1 1 0 0 1 16 8H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
CalculatorIconBoldDuotone.displayName = "CalculatorIconBoldDuotone";
export { CalculatorIconBoldDuotone };
