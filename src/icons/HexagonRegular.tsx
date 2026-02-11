import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonRegularProps = Omit<IconBaseProps, 'children'>;

const HexagonRegular = memo(
  forwardRef<SVGSVGElement, HexagonRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hexagon" {...props}>
      <path fillRule="evenodd" d="M14.2 3.25c.96 0 1.62 0 2.22.19q.76.25 1.36.8c.46.42.77 1 1.25 1.84l1.8 3.2c.46.81.78 1.36.9 1.96q.15.76 0 1.52c-.12.6-.44 1.15-.9 1.96l-1.8 3.2c-.48.85-.79 1.42-1.25 1.85q-.6.54-1.36.8c-.6.19-1.26.18-2.23.18H9.81c-.97 0-1.63 0-2.23-.19q-.76-.24-1.36-.8c-.46-.42-.77-1-1.25-1.84l-1.8-3.2c-.46-.81-.78-1.36-.9-1.96q-.15-.76 0-1.52c.12-.6.44-1.15.9-1.96l1.8-3.2c.48-.85.79-1.42 1.25-1.85q.6-.54 1.36-.8c.6-.19 1.26-.18 2.23-.18zm-4.4 1.5c-1.07 0-1.43 0-1.75.11q-.46.15-.81.48c-.25.22-.44.54-.96 1.47l-1.8 3.2a6 6 0 0 0-.74 1.53q-.09.46 0 .92c.06.31.23.62.74 1.53l1.8 3.2c.52.93.71 1.25.96 1.47q.34.33.81.48c.32.1.68.11 1.76.11h4.38c1.08 0 1.44 0 1.76-.11q.46-.15.81-.48c.25-.22.44-.54.96-1.47l1.8-3.2c.5-.9.68-1.22.74-1.53q.09-.46 0-.92a6 6 0 0 0-.74-1.53l-1.8-3.2a6 6 0 0 0-.96-1.47 2 2 0 0 0-.81-.48c-.32-.1-.68-.11-1.76-.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

HexagonRegular.displayName = 'HexagonRegular';

// Triple export pattern (lucide-react style)
export { HexagonRegular, HexagonRegular as HexagonRegularIcon, HexagonRegular as SiHexagonRegular };
export default HexagonRegular;
export type { HexagonRegularProps };
