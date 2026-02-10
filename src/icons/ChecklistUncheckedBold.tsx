import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistUncheckedBold.displayName = 'ChecklistUncheckedBold';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedBold, ChecklistUncheckedBold as ChecklistUncheckedBoldIcon, ChecklistUncheckedBold as SiChecklistUncheckedBold };
export default ChecklistUncheckedBold;
export type { ChecklistUncheckedBoldProps };
