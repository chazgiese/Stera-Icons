import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.42 0 .76.34.76.75v4.24H17a.75.75 0 0 1 0 1.5h-4.24V17a.75.75 0 0 1-1.5 0v-4.26H7a.75.75 0 1 1 0-1.5h4.26V7c0-.41.33-.75.75-.75" />
    </IconBase>
  ))
);

PlusCircleRegularDuotone.displayName = 'PlusCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleRegularDuotone, PlusCircleRegularDuotone as PlusCircleRegularDuotoneIcon, PlusCircleRegularDuotone as SiPlusCircleRegularDuotone };
export default PlusCircleRegularDuotone;
export type { PlusCircleRegularDuotoneProps };
