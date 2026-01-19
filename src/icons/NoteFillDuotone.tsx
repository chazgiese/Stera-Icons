import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteFillDuotone = memo(
  forwardRef<SVGSVGElement, NoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-fill-duotone" {...props}>
      <path fill="currentColor" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71V14h-4.8c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11V22H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.2 14H22q0 .46-.08.87a3 3 0 0 1-.36.87q-.29.43-.73.85l-.06.05-4.13 4.13-.05.06c-.3.29-.55.54-.85.73A3 3 0 0 1 14 22v-4.8c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88c.43-.22.99-.22 2.11-.22" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteFillDuotone.displayName = 'NoteFillDuotone';

// Triple export pattern (lucide-react style)
export { NoteFillDuotone, NoteFillDuotone as NoteFillDuotoneIcon, NoteFillDuotone as SiNoteFillDuotone };
export default NoteFillDuotone;
export type { NoteFillDuotoneProps };
