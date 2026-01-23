import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoOffFillDuotone = memo(
  forwardRef<SVGSVGElement, VideoOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-off-fill-duotone" {...props}>
      <path d="M15.44 18.19q-.53.22-1.23.27-.77.05-2.01.04H6.8q-1.24.01-2.01-.04a4 4 0 0 1-1.38-.34 3.5 3.5 0 0 1-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01a3.6 3.6 0 0 1 .5-1.64zM21.38 6.22A1 1 0 0 1 23 7v10a1 1 0 0 1-1.62.78l-2.71-2.16.03-.3q.06-.9.05-2.12v-2.4q.01-1.22-.05-2.11l-.03-.3zM12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01a3.6 3.6 0 0 1-.5 1.64L3.57 5.81q.53-.22 1.23-.27.77-.05 2.01-.04z" opacity={0.4} />
        <path fill="currentColor" d="M.23 4.36a1 1 0 0 1 1.4-.13l17 14a1 1 0 0 1-1.27 1.54l-17-14a1 1 0 0 1-.13-1.4" />
    </IconBase>
  ))
);

VideoOffFillDuotone.displayName = 'VideoOffFillDuotone';

// Triple export pattern (lucide-react style)
export { VideoOffFillDuotone, VideoOffFillDuotone as VideoOffFillDuotoneIcon, VideoOffFillDuotone as SiVideoOffFillDuotone };
export default VideoOffFillDuotone;
export type { VideoOffFillDuotoneProps };
