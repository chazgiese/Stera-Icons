import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameFillDuotone = memo(
  forwardRef<SVGSVGElement, FlameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12.15 2.01.18.05.15.06.05.03.06.04.04.04h.01l.08.07a22 22 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07.1-.08.06-.03.14-.06h.01a1 1 0 0 1 .48-.05m.03 9.03a.5.5 0 0 0-.36 0h-.03l-.06.04-.02.01-.03.03h-.01l-.13.12a12 12 0 0 0-1.43 1.53c-.77.96-1.61 2.34-1.61 3.78 0 1.2.5 2.09 1.2 2.66a3.7 3.7 0 0 0 4.6 0c.7-.57 1.2-1.45 1.2-2.66 0-1.44-.84-2.82-1.6-3.78a13 13 0 0 0-1.57-1.64v-.01l-.04-.03h-.02l-.06-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.82 11.04a.5.5 0 0 1 .36 0h.03l.06.04.02.01.03.03h.01l.13.12a12 12 0 0 1 1.43 1.53c.77.96 1.61 2.34 1.61 3.78 0 1.2-.5 2.09-1.2 2.66a3.7 3.7 0 0 1-4.6 0 3.3 3.3 0 0 1-1.2-2.66c0-1.44.84-2.82 1.6-3.78a13 13 0 0 1 1.57-1.64v-.01l.04-.03h.02l.06-.04z" />
    </IconBase>
  ))
);

FlameFillDuotone.displayName = 'FlameFillDuotone';

// Triple export pattern (lucide-react style)
export { FlameFillDuotone, FlameFillDuotone as FlameFillDuotoneIcon, FlameFillDuotone as SiFlameFillDuotone };
export default FlameFillDuotone;
export type { FlameFillDuotoneProps };
