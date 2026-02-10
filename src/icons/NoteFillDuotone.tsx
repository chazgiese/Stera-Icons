import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteFillDuotone = memo(
  forwardRef<SVGSVGElement, NoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-fill-duotone" {...props}>
      <path d="M13.6 5c1.14 0 1.93 0 2.55.05.6.05.95.14 1.21.28a3 3 0 0 1 1.31 1.3c.14.27.23.62.28 1.22.05.62.05 1.41.05 2.55V12h-2.8q-.81 0-1.4.03c-.4.03-.78.1-1.16.3a3 3 0 0 0-1.31 1.3c-.2.39-.27.78-.3 1.17q-.04.59-.03 1.4V19h-1.6c-1.14 0-1.93 0-2.55-.05a3 3 0 0 1-1.21-.28 3 3 0 0 1-1.31-1.3 3 3 0 0 1-.28-1.22C5 15.53 5 14.74 5 13.6v-3.2c0-1.14 0-1.93.05-2.55.05-.6.14-.95.28-1.21a3 3 0 0 1 1.3-1.31 3 3 0 0 1 1.22-.28C8.47 5 9.26 5 10.4 5z" opacity={0.4} />
        <path d="m18.58 14-.22.23-4.13 4.13-.23.22V16.2c0-.58 0-.95.02-1.23.03-.27.06-.37.09-.42a1 1 0 0 1 .44-.44c.05-.03.15-.06.42-.09.28-.02.65-.02 1.23-.02z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v2.27q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-4.13 4.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H10.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-3.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H12v-2.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19v-1.6c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5zm5.8 9c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.38l.23-.22 4.13-4.13.22-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteFillDuotone.displayName = 'NoteFillDuotone';

// Triple export pattern (lucide-react style)
export { NoteFillDuotone, NoteFillDuotone as NoteFillDuotoneIcon, NoteFillDuotone as SiNoteFillDuotone };
export default NoteFillDuotone;
export type { NoteFillDuotoneProps };
