import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NoteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteRegularDuotone = memo(
  forwardRef<SVGSVGElement, NoteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.75 14q.01.44-.08.81-.09.42-.33.8c-.18.3-.43.54-.75.86l-4.12 4.12c-.32.32-.57.57-.86.75a2.8 2.8 0 0 1-1.6.4l-.76.02V17.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h4.56zm-4.55.75q-.84 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.9q.04 0 .07-.03c.11-.07.22-.17.59-.54l4.12-4.12a4 4 0 0 0 .58-.66z" clipRule="evenodd" />
        <path fill="currentColor" d="M14.6 2.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.85h-1.5V9.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05H9.4c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v5.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h3.85v1.5H9.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.4q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" opacity={.4} />
    </IconBase>
  ))
);

NoteRegularDuotone.displayName = 'NoteRegularDuotone';

// Triple export pattern (lucide-react style)
export { NoteRegularDuotone, NoteRegularDuotone as NoteRegularDuotoneIcon, NoteRegularDuotone as SiNoteRegularDuotone };
export type { NoteRegularDuotoneProps };
