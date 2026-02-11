import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EditSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EditSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, EditSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square-fill-duotone" {...props}>
      <path d="M11.5 3.5a1 1 0 1 1 0 2H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.6a1 1 0 1 1 2 0v1.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06z" opacity={.4} />
        <path d="M15.9 3.9a2.98 2.98 0 0 1 4.2 4.2l-7.5 7.51a1.5 1.5 0 0 1-.88.43l-3.66.46a.5.5 0 0 1-.56-.56l.46-3.66q.07-.5.43-.88z" />
    </IconBase>
  ))
);

EditSquareFillDuotone.displayName = 'EditSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { EditSquareFillDuotone, EditSquareFillDuotone as EditSquareFillDuotoneIcon, EditSquareFillDuotone as SiEditSquareFillDuotone };
export default EditSquareFillDuotone;
export type { EditSquareFillDuotoneProps };
