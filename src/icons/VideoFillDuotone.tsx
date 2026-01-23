import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoFillDuotone = memo(
  forwardRef<SVGSVGElement, VideoFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-fill-duotone" {...props}>
      <path fill="currentColor" d="M21.38 6.22A1 1 0 0 1 23 7v10a1 1 0 0 1-1.62.78l-3.65-2.92q.02-.69.02-1.66v-2.4q0-.97-.02-1.67z" opacity={.4} />
        <path fill="currentColor" d="m13.32 5.25.91.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h6.52" />
    </IconBase>
  ))
);

VideoFillDuotone.displayName = 'VideoFillDuotone';

// Triple export pattern (lucide-react style)
export { VideoFillDuotone, VideoFillDuotone as VideoFillDuotoneIcon, VideoFillDuotone as SiVideoFillDuotone };
export default VideoFillDuotone;
export type { VideoFillDuotoneProps };
