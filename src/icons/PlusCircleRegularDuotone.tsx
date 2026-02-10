import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 7.25c.42 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PlusCircleRegularDuotone.displayName = 'PlusCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlusCircleRegularDuotone, PlusCircleRegularDuotone as PlusCircleRegularDuotoneIcon, PlusCircleRegularDuotone as SiPlusCircleRegularDuotone };
export default PlusCircleRegularDuotone;
export type { PlusCircleRegularDuotoneProps };
