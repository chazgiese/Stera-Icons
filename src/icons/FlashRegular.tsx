import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashRegularProps = Omit<IconBaseProps, 'children'>;

const FlashRegular = memo(
  forwardRef<SVGSVGElement, FlashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.88 1.44a.75.75 0 0 1 1.2.79l-2.4 7.48 4.57 1.58a.75.75 0 0 1 .25 1.27l-11.38 10a.75.75 0 0 1-1.2-.79l2.4-7.48-4.57-1.58a.75.75 0 0 1-.25-1.27zM6.46 11.7l4.03 1.4c.39.13.6.55.47.94l-1.8 5.6 8.38-7.36-4.04-1.4a.75.75 0 0 1-.46-.94l1.8-5.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashRegular.displayName = 'FlashRegular';

// Triple export pattern (lucide-react style)
export { FlashRegular, FlashRegular as FlashRegularIcon, FlashRegular as SiFlashRegular };
export default FlashRegular;
export type { FlashRegularProps };
