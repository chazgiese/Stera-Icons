import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistRegular = memo(
  forwardRef<SVGSVGElement, ChecklistRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChecklistRegular.displayName = 'ChecklistRegular';

// Triple export pattern (lucide-react style)
export { ChecklistRegular, ChecklistRegular as ChecklistRegularIcon, ChecklistRegular as SiChecklistRegular };
export default ChecklistRegular;
export type { ChecklistRegularProps };
