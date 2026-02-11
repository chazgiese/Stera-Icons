import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicRegularProps = Omit<IconBaseProps, 'children'>;

const MusicRegular = memo(
  forwardRef<SVGSVGElement, MusicRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="music" {...props}>
      <path fillRule="evenodd" d="M18.42 2.5a2 2 0 0 1 2.33 1.98v11.08a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71 0 1.31.33v-5.2L8.75 9.65v7.92a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71 0 1.31.33V6.06a2 2 0 0 1 1.67-1.97zM5.94 16.25a2.7 2.7 0 0 0-2.69 2.69c0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31m12-2a2.7 2.7 0 0 0-2.69 2.69c0 .72.59 1.31 1.31 1.31 1.49 0 2.69-1.2 2.69-2.69 0-.72-.59-1.31-1.31-1.31m.73-10.27-9.5 1.59a.5.5 0 0 0-.42.49V8.1l10.5-1.75V4.48a.5.5 0 0 0-.58-.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MusicRegular.displayName = 'MusicRegular';

// Triple export pattern (lucide-react style)
export { MusicRegular, MusicRegular as MusicRegularIcon, MusicRegular as SiMusicRegular };
export default MusicRegular;
export type { MusicRegularProps };
