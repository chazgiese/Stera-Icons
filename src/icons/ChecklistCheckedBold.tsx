import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistCheckedBoldProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedBold = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m1.78 2.33a.5.5 0 0 0-.7.14l-1.57 2.37H4.5l-.58-.87a.5.5 0 1 0-.84.56l.58.86q.1.16.2.28c.06.08.17.2.33.26q.31.14.62 0a1 1 0 0 0 .33-.26q.1-.12.2-.28l1.58-2.36a.5.5 0 0 0-.14-.7" clipRule="evenodd" />
        <path fill="currentColor" d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m1.78 2.33a.5.5 0 0 0-.7.14L4.51 7.84H4.5l-.58-.87a.5.5 0 1 0-.84.56l.58.86q.1.16.2.28c.06.08.17.2.33.26q.31.13.62 0a1 1 0 0 0 .33-.26q.1-.12.2-.28l1.58-2.36a.5.5 0 0 0-.14-.7" clipRule="evenodd" />
        <path fill="currentColor" d="M22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistCheckedBold.displayName = 'ChecklistCheckedBold';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedBold, ChecklistCheckedBold as ChecklistCheckedBoldIcon, ChecklistCheckedBold as SiChecklistCheckedBold };
export default ChecklistCheckedBold;
export type { ChecklistCheckedBoldProps };
