import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EditSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EditSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, EditSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square-bold-duotone" {...props}>
      <path fill="currentColor" d="M11.5 3.5a1 1 0 1 1 0 2H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.6a1 1 0 1 1 2 0v1.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.54 3.54a3.47 3.47 0 0 1 4.92 4.92L12.7 16.2a1 1 0 0 1-.59.28l-4 .5a1 1 0 0 1-1.11-1.11l.5-4a1 1 0 0 1 .28-.59zm3.5 1.42a1.5 1.5 0 0 0-2.08 0l-7.51 7.5-.3 2.39 2.39-.3 7.5-7.5c.58-.58.58-1.52 0-2.1" clipRule="evenodd" />
    </IconBase>
  ))
);

EditSquareBoldDuotone.displayName = 'EditSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { EditSquareBoldDuotone, EditSquareBoldDuotone as EditSquareBoldDuotoneIcon, EditSquareBoldDuotone as SiEditSquareBoldDuotone };
export default EditSquareBoldDuotone;
export type { EditSquareBoldDuotoneProps };
