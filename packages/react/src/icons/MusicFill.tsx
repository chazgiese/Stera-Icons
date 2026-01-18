import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MusicFillProps = Omit<IconBaseProps, 'children'>;

const MusicFill = memo(
  forwardRef<SVGSVGElement, MusicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.42 2.5a2 2 0 0 1 2.33 1.98v11.08a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71.01 1.31.32V7.9L8.75 9.64v7.92a4.2 4.2 0 0 1-4.19 4.19 2.8 2.8 0 0 1-2.81-2.81 4.2 4.2 0 0 1 4.19-4.19q.71.01 1.31.32V6.06a2 2 0 0 1 1.67-1.97z" />
    </IconBase>
  ))
);

MusicFill.displayName = 'MusicFill';

// Triple export pattern (lucide-react style)
export { MusicFill, MusicFill as MusicFillIcon, MusicFill as SiMusicFill };
export type { MusicFillProps };
