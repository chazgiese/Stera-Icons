import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-duotone" {...props}>
      <path d="M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
    </IconBase>
  ))
);

ChecklistRegularDuotone.displayName = 'ChecklistRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistRegularDuotone, ChecklistRegularDuotone as ChecklistRegularDuotoneIcon, ChecklistRegularDuotone as SiChecklistRegularDuotone };
export default ChecklistRegularDuotone;
export type { ChecklistRegularDuotoneProps };
