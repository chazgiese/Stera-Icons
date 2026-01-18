import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NoteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteBoldDuotone = memo(
  forwardRef<SVGSVGElement, NoteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.76 22H13h.92zM22 13.76v.16V13v.76M17.2 15h2.38l-.22.23-4.13 4.13-.23.22V17.2c0-.58 0-.95.02-1.23.03-.27.06-.37.09-.42a1 1 0 0 1 .44-.44c.05-.03.15-.06.42-.09.28-.02.65-.02 1.23-.02M13 17.2V22h.92a4 4 0 0 0 1.08-.12 3 3 0 0 0 .74-.32q.43-.29.85-.73l.05-.06 4.13-4.13.06-.05c.29-.3.54-.55.73-.85a3 3 0 0 0 .44-1.82V13h-4.85q-.78 0-1.35.03c-.4.03-.78.1-1.16.3a3 3 0 0 0-1.31 1.3c-.2.39-.27.78-.3 1.17q-.04.57-.03 1.35z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M14.6 2h.05q1.6-.02 2.66.06c.73.06 1.37.18 1.96.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.04.06 2.66V13h-2V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 4 15.74 4 14.6 4H9.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 7.47 4 8.26 4 9.4v5.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v2H9.35q-1.6.02-2.66-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.04-.06-2.66v-5.3q-.02-1.6.06-2.66c.06-.73.18-1.37.48-1.96a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.73 1.99 9.35 2h5.25" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

NoteBoldDuotone.displayName = 'NoteBoldDuotone';

// Triple export pattern (lucide-react style)
export { NoteBoldDuotone, NoteBoldDuotone as NoteBoldDuotoneIcon, NoteBoldDuotone as SiNoteBoldDuotone };
export type { NoteBoldDuotoneProps };
