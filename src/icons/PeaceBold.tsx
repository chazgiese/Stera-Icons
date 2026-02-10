import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceBoldProps = Omit<IconBaseProps, 'children'>;

const PeaceBold = memo(
  forwardRef<SVGSVGElement, PeaceBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M7.1 18.32a8 8 0 0 0 3.9 1.62V14.4zm5.9 1.62a8 8 0 0 0 3.9-1.62l-3.9-3.9zM11 4.06A8 8 0 0 0 5.68 16.9L11 11.6zm2 7.53 5.32 5.31A8 8 0 0 0 13 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceBold.displayName = 'PeaceBold';

// Triple export pattern (lucide-react style)
export { PeaceBold, PeaceBold as PeaceBoldIcon, PeaceBold as SiPeaceBold };
export default PeaceBold;
export type { PeaceBoldProps };
