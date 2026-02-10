import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5a1 1 0 0 0-1 1v3H8a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3V8a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PlusCircleFillDuotone.displayName = 'PlusCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleFillDuotone, PlusCircleFillDuotone as PlusCircleFillDuotoneIcon, PlusCircleFillDuotone as SiPlusCircleFillDuotone };
export default PlusCircleFillDuotone;
export type { PlusCircleFillDuotoneProps };
