import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-bold" {...props}>
      <path d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistCheckedBold.displayName = 'ChecklistCheckedBold';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedBold, ChecklistCheckedBold as ChecklistCheckedBoldIcon, ChecklistCheckedBold as SiChecklistCheckedBold };
export default ChecklistCheckedBold;
export type { ChecklistCheckedBoldProps };
