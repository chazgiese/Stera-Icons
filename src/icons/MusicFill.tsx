import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MusicFillProps = Omit<IconBaseProps, 'children'>;

const MusicFill = memo(
  forwardRef<SVGSVGElement, MusicFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="music-fill" {...props}>
      <path d="M18.42 2.5a2 2 0 0 1 2.33 1.98v11.08a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71 0 1.31.33v-5.2L8.75 9.65v7.92a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71 0 1.31.33V6.06a2 2 0 0 1 1.67-1.97z" />
    </IconBase>
  ))
);

MusicFill.displayName = 'MusicFill';

// Triple export pattern (lucide-react style)
export { MusicFill, MusicFill as MusicFillIcon, MusicFill as SiMusicFill };
export default MusicFill;
export type { MusicFillProps };
