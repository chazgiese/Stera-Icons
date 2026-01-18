import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NoteTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, NoteTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22 13.92a4 4 0 0 1-.12 1.08 3 3 0 0 1-.32.74q-.29.43-.73.85l-4.24 4.24c-.3.29-.55.54-.85.73a3 3 0 0 1-1.82.44H9.35q-1.6.02-2.66-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.04-.06-2.66v-5.3q-.02-1.6.06-2.66c.06-.73.18-1.37.48-1.96a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.73 1.99 9.35 2h5.3q1.6-.02 2.66.06c.73.06 1.37.18 1.96.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.04.06 2.66zM20 13V9.4c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C16.53 4 15.74 4 14.6 4H9.4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C4 7.47 4 8.26 4 9.4v5.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05H13v-2.85q0-.78.03-1.35c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.57-.04 1.35-.03zm-2.8 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.38l.23-.22 4.13-4.13.22-.23z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 7a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

NoteTextBoldDuotone.displayName = 'NoteTextBoldDuotone';

export { NoteTextBoldDuotone };
export type { NoteTextBoldDuotoneProps };
