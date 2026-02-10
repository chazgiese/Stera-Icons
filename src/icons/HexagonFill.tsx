import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonFillProps = Omit<IconBaseProps, 'children'>;

const HexagonFill = memo(
  forwardRef<SVGSVGElement, HexagonFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hexagon-fill" {...props}>
      <path fill="currentColor" d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 0 1.62c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.46.85c-.64.21-1.34.2-2.3.2H9.81c-.96 0-1.66.01-2.3-.2a4 4 0 0 1-1.46-.85c-.5-.46-.83-1.07-1.3-1.9l-1.8-3.2c-.45-.8-.8-1.4-.92-2.04a4 4 0 0 1 0-1.62c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2z" />
    </IconBase>
  ))
);

HexagonFill.displayName = 'HexagonFill';

// Triple export pattern (lucide-react style)
export { HexagonFill, HexagonFill as HexagonFillIcon, HexagonFill as SiHexagonFill };
export default HexagonFill;
export type { HexagonFillProps };
