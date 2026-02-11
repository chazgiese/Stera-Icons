import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleBoldProps = Omit<IconBaseProps, 'children'>;

const XCircleBold = memo(
  forwardRef<SVGSVGElement, XCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-bold" {...props}>
      <path d="M8.3 8.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.3a1 1 0 0 1 1.4 1.42L13.43 12l2.29 2.29a1 1 0 0 1-1.42 1.41L12 13.41l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 12l-2.3-2.3a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleBold.displayName = 'XCircleBold';

// Triple export pattern (lucide-react style)
export { XCircleBold, XCircleBold as XCircleBoldIcon, XCircleBold as SiXCircleBold };
export default XCircleBold;
export type { XCircleBoldProps };
