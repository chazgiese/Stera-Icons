import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MusicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MusicFillDuotone = memo(
  forwardRef<SVGSVGElement, MusicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.94 16.5c.58 0 1.06.48 1.06 1.06C7 18.91 5.9 20 4.56 20c-.58 0-1.06-.48-1.06-1.06 0-1.35 1.1-2.44 2.44-2.44M17.94 14.5c.58 0 1.06.48 1.06 1.06 0 1.35-1.1 2.44-2.44 2.44-.58 0-1.06-.48-1.06-1.06 0-1.35 1.1-2.44 2.44-2.44M18.7 4.23c.16-.03.3.1.3.25v1.67L9 7.82V6.06c0-.12.09-.23.2-.25z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.38 2.26A2.25 2.25 0 0 1 21 4.48v11.08A4.44 4.44 0 0 1 16.56 20a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44q.56 0 1.06.2V8.17L9 9.85v7.71A4.44 4.44 0 0 1 4.56 22a3.06 3.06 0 0 1-3.06-3.06 4.44 4.44 0 0 1 4.44-4.44q.56 0 1.06.2V6.05c0-1.1.8-2.04 1.88-2.22zM5.94 16.5a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06C5.91 20 7 18.9 7 17.56c0-.58-.48-1.06-1.06-1.06m12-2a2.44 2.44 0 0 0-2.44 2.44c0 .58.48 1.06 1.06 1.06 1.35 0 2.44-1.1 2.44-2.44 0-.58-.48-1.06-1.06-1.06m.77-10.27L9.2 5.8a.25.25 0 0 0-.21.25v1.76l10-1.67V4.48a.25.25 0 0 0-.3-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicFillDuotone.displayName = 'MusicFillDuotone';

// Triple export pattern (lucide-react style)
export { MusicFillDuotone, MusicFillDuotone as MusicFillDuotoneIcon, MusicFillDuotone as SiMusicFillDuotone };
export type { MusicFillDuotoneProps };
