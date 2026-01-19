import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MusicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicBoldDuotone = memo(
  forwardRef<SVGSVGElement, MusicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="music-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.38 2.26A2.25 2.25 0 0 1 21 4.48V15.5a3.1 3.1 0 0 0-2-2.82V8.2L9 9.84v7.67a3.1 3.1 0 0 0-2-2.83V6.06c0-1.1.8-2.04 1.88-2.22zm.33 1.97L9.2 5.8a.25.25 0 0 0-.21.25v1.76l10-1.67V4.48a.25.25 0 0 0-.3-.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.94 14.5C7.63 14.5 9 15.87 9 17.56A4.44 4.44 0 0 1 4.56 22a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44m0 2a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06C5.91 20 7 18.9 7 17.56c0-.58-.48-1.06-1.06-1.06M17.94 12.5c1.69 0 3.06 1.37 3.06 3.06A4.44 4.44 0 0 1 16.56 20a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44m0 2a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06 1.35 0 2.44-1.1 2.44-2.44 0-.58-.48-1.06-1.06-1.06" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicBoldDuotone.displayName = 'MusicBoldDuotone';

// Triple export pattern (lucide-react style)
export { MusicBoldDuotone, MusicBoldDuotone as MusicBoldDuotoneIcon, MusicBoldDuotone as SiMusicBoldDuotone };
export type { MusicBoldDuotoneProps };
