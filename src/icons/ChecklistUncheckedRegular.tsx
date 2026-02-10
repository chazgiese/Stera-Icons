import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedRegular = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChecklistUncheckedRegular.displayName = 'ChecklistUncheckedRegular';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedRegular, ChecklistUncheckedRegular as ChecklistUncheckedRegularIcon, ChecklistUncheckedRegular as SiChecklistUncheckedRegular };
export default ChecklistUncheckedRegular;
export type { ChecklistUncheckedRegularProps };
