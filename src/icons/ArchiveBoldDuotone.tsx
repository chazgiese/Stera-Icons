import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archive-bold-duotone" {...props}>
      <path d="M21 15.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V9.5l.37.23q.49.22.96.25L5 10v5.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10q.37 0 .67-.02A2.5 2.5 0 0 0 21 9.5z" opacity={.4} />
        <path d="M14 12a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M18.6 3q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 6.4v.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T18.6 10H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 7.2 2 6.6v-.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 3zM5.4 5a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C4 5.7 4 5.96 4 6.4v.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h13.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.2a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C19.3 5 19.04 5 18.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveBoldDuotone.displayName = 'ArchiveBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArchiveBoldDuotone, ArchiveBoldDuotone as ArchiveBoldDuotoneIcon, ArchiveBoldDuotone as SiArchiveBoldDuotone };
export default ArchiveBoldDuotone;
export type { ArchiveBoldDuotoneProps };
