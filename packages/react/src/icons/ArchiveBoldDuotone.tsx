import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchiveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchiveBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArchiveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 16.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 17.43 2 16.2V8.5l.37.23q.49.22.96.25C3.66 9 4 9 4 9v7.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9q.02.01.67-.02A2.5 2.5 0 0 0 22 8.5z" opacity={.4} />
        <path fill="currentColor" d="M15 11a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T23 5.4v.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T19.6 9H4.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q1 6.2 1 5.6v-.2q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T4.4 2zM4.4 4a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C3 4.7 3 4.96 3 5.4v.2a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h15.2a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.2a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C20.3 4 20.04 4 19.6 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveBoldDuotone.displayName = 'ArchiveBoldDuotone';

export { ArchiveBoldDuotone };
export type { ArchiveBoldDuotoneProps };
