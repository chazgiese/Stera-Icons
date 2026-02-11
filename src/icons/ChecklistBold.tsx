import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistBold = memo(
  forwardRef<SVGSVGElement, ChecklistBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-bold" {...props}>
      <path fillRule="evenodd" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path d="M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistBold.displayName = 'ChecklistBold';

// Triple export pattern (lucide-react style)
export { ChecklistBold, ChecklistBold as ChecklistBoldIcon, ChecklistBold as SiChecklistBold };
export default ChecklistBold;
export type { ChecklistBoldProps };
