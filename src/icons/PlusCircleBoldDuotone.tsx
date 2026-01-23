import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PlusCircleBoldDuotone.displayName = 'PlusCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleBoldDuotone, PlusCircleBoldDuotone as PlusCircleBoldDuotoneIcon, PlusCircleBoldDuotone as SiPlusCircleBoldDuotone };
export default PlusCircleBoldDuotone;
export type { PlusCircleBoldDuotoneProps };
