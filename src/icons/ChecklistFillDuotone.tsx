import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-fill-duotone" {...props}>
      <path d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m1.78 2.33a.5.5 0 0 0-.7.14L4.51 7.84H4.5l-.58-.87a.5.5 0 1 0-.84.56l.58.86q.1.16.2.28c.06.08.17.2.33.26q.31.13.62 0a1 1 0 0 0 .33-.26q.1-.12.2-.28l1.58-2.36a.5.5 0 0 0-.14-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

ChecklistFillDuotone.displayName = 'ChecklistFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistFillDuotone, ChecklistFillDuotone as ChecklistFillDuotoneIcon, ChecklistFillDuotone as SiChecklistFillDuotone };
export default ChecklistFillDuotone;
export type { ChecklistFillDuotoneProps };
