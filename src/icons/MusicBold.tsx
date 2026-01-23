import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicBoldProps = Omit<IconBaseProps, 'children'>;

const MusicBold = memo(
  forwardRef<SVGSVGElement, MusicBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="music-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.38 2.26A2.25 2.25 0 0 1 21 4.48v11.08A4.44 4.44 0 0 1 16.56 20a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44q.56 0 1.06.2V8.17L9 9.85v7.71A4.44 4.44 0 0 1 4.56 22a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44q.56 0 1.06.2V6.05c0-1.1.8-2.04 1.88-2.22zM5.94 16.5a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06C5.91 20 7 18.9 7 17.56c0-.58-.48-1.06-1.06-1.06m12-2a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06 1.35 0 2.44-1.1 2.44-2.44 0-.58-.48-1.06-1.06-1.06m.77-10.27L9.2 5.8a.25.25 0 0 0-.21.25v1.76l10-1.67V4.48a.25.25 0 0 0-.3-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicBold.displayName = 'MusicBold';

// Triple export pattern (lucide-react style)
export { MusicBold, MusicBold as MusicBoldIcon, MusicBold as SiMusicBold };
export default MusicBold;
export type { MusicBoldProps };
