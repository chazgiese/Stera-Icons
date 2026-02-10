import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillProps = Omit<IconBaseProps, 'children'>;

const FlameFill = memo(
  forwardRef<SVGSVGElement, FlameFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a1 1 0 0 1 .33.06l.15.06.05.03.06.04.04.04h.01l.08.07a23 23 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07.1-.08.06-.03.14-.06h.01A1 1 0 0 1 12 2m-.1 9-.03.02-.14.06-.05.04h-.01l-.03.03-.1.1a12 12 0 0 0-1.43 1.52c-.77.96-1.61 2.34-1.61 3.78 0 1.2.5 2.09 1.2 2.66a3.7 3.7 0 0 0 4.6 0c.7-.57 1.2-1.45 1.2-2.66 0-1.44-.84-2.82-1.6-3.78a13 13 0 0 0-1.44-1.53l-.1-.09-.03-.02v-.01h-.01l-.03-.02-.16-.08-.04-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameFill.displayName = 'FlameFill';

// Triple export pattern (lucide-react style)
export { FlameFill, FlameFill as FlameFillIcon, FlameFill as SiFlameFill };
export default FlameFill;
export type { FlameFillProps };
