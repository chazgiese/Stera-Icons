import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HexagonBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HexagonBoldDuotone = memo(
  forwardRef<SVGSVGElement, HexagonBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hexagon-bold-duotone" {...props}>
      <path fill="currentColor" d="M2.69 12a3 3 0 0 0 .07.65c.1.45.35.9 1.13 2.17l1.6 2.6a8 8 0 0 0 1.29 1.84 3 3 0 0 0 1.06.6c.4.13.87.14 2.25.14h3.82c1.37 0 1.85-.01 2.25-.14a3 3 0 0 0 1.06-.6c.33-.28.58-.67 1.3-1.84l1.59-2.6c.78-1.28 1.03-1.72 1.13-2.17a3 3 0 0 0 .07-.65h2a5 5 0 0 1-.12 1.09c-.19.85-.67 1.62-1.38 2.77l-1.59 2.6c-.64 1.06-1.07 1.78-1.68 2.31a5 5 0 0 1-1.77 1c-.78.24-1.62.23-2.86.23h-3.82c-1.24 0-2.09.01-2.86-.23a5 5 0 0 1-1.77-1c-.6-.53-1.04-1.25-1.69-2.31l-1.58-2.6C1.49 14.7.99 13.94.8 13.09A5 5 0 0 1 .69 12z" opacity={.4} />
        <path fill="currentColor" d="M13.91 2c1.24 0 2.08-.01 2.86.23a5 5 0 0 1 1.77 1c.6.53 1.04 1.25 1.68 2.31l1.6 2.6c.7 1.15 1.18 1.92 1.37 2.77a5 5 0 0 1 .12 1.09h-2a3 3 0 0 0-.07-.65c-.1-.45-.35-.9-1.13-2.17l-1.6-2.6a8 8 0 0 0-1.29-1.84 3 3 0 0 0-1.06-.6c-.4-.13-.88-.14-2.25-.14h-3.82c-1.38 0-1.85.01-2.25.14a3 3 0 0 0-1.06.6c-.33.28-.58.67-1.3 1.84L3.9 9.18c-.78 1.28-1.03 1.72-1.13 2.17a3 3 0 0 0-.07.65h-2a5 5 0 0 1 .12-1.09c.19-.85.67-1.62 1.38-2.77l1.58-2.6c.65-1.06 1.08-1.78 1.7-2.31a5 5 0 0 1 1.76-1C8 2 8.85 2 10.1 2z" />
    </IconBase>
  ))
);

HexagonBoldDuotone.displayName = 'HexagonBoldDuotone';

// Triple export pattern (lucide-react style)
export { HexagonBoldDuotone, HexagonBoldDuotone as HexagonBoldDuotoneIcon, HexagonBoldDuotone as SiHexagonBoldDuotone };
export type { HexagonBoldDuotoneProps };
