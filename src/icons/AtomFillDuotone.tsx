import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomFillDuotone = memo(
  forwardRef<SVGSVGElement, AtomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.45 5.45c.42-.42 1.1-.6 2.18-.31.8.2 1.71.65 2.69 1.27q-1.06.87-2.05 1.86A1 1 0 0 0 9.7 9.7a21 21 0 0 1 5.44-4.09c1.78-.83 2.85-.72 3.42-.15.42.42.6 1.1.31 2.18q-.32 1.21-1.27 2.69-.87-1.06-1.86-2.05A1 1 0 0 0 14.3 9.7a21 21 0 0 1 4.09 5.44c.83 1.78.72 2.85.15 3.42-.42.42-1.1.6-2.18.31a10 10 0 0 1-2.69-1.27q1.06-.87 2.05-1.86a1 1 0 0 0-1.42-1.42 21 21 0 0 1-5.44 4.09c-1.78.83-2.85.72-3.42.15-.42-.42-.6-1.1-.31-2.18.2-.8.65-1.71 1.27-2.69q.87 1.06 1.86 2.05A1 1 0 0 0 9.7 14.3 21 21 0 0 1 5.6 8.87c-.83-1.78-.72-2.85-.15-3.42M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.28 3.8c1.91-.9 4.15-1.3 5.68.23 1.13 1.13 1.21 2.66.84 4.1A13 13 0 0 1 18.88 12a16 16 0 0 1 1.33 2.28c.9 1.92 1.3 4.15-.24 5.69-1.13 1.12-2.66 1.2-4.1.82A13 13 0 0 1 12 18.87a16 16 0 0 1-2.28 1.34c-1.92.9-4.15 1.3-5.69-.24-1.12-1.13-1.2-2.66-.83-4.1A13 13 0 0 1 5.12 12 16 16 0 0 1 3.8 9.72c-.9-1.92-1.3-4.15.24-5.69 1.13-1.12 2.66-1.2 4.1-.83 1.25.33 2.58 1.03 3.87 1.92a16 16 0 0 1 2.28-1.33M7.63 5.13c-1.09-.29-1.76-.11-2.18.3-.57.58-.68 1.65.15 3.43.8 1.7 2.3 3.65 4.09 5.44a1 1 0 0 1-1.42 1.42 30 30 0 0 1-1.86-2.05 10 10 0 0 0-1.27 2.7c-.29 1.08-.11 1.75.3 2.17.58.57 1.65.68 3.43-.15 1.7-.8 3.65-2.3 5.44-4.09a1 1 0 0 1 1.42 1.42q-1 .98-2.05 1.86 1.49.94 2.7 1.27c1.08.29 1.75.11 2.17-.3.57-.58.68-1.65-.15-3.43-.8-1.7-2.3-3.65-4.09-5.44a1 1 0 0 1 1.42-1.42q.98 1 1.86 2.05a10 10 0 0 0 1.27-2.7c.29-1.08.11-1.75-.3-2.17-.58-.57-1.65-.68-3.43.15-1.7.8-3.65 2.3-5.44 4.09a1 1 0 0 1-1.42-1.42q1-.98 2.05-1.86a10 10 0 0 0-2.7-1.27" clipRule="evenodd" />
        <path fill="currentColor" d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

AtomFillDuotone.displayName = 'AtomFillDuotone';

// Triple export pattern (lucide-react style)
export { AtomFillDuotone, AtomFillDuotone as AtomFillDuotoneIcon, AtomFillDuotone as SiAtomFillDuotone };
export default AtomFillDuotone;
export type { AtomFillDuotoneProps };
