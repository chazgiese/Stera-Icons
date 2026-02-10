import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffBoldProps = Omit<IconBaseProps, 'children'>;

const VideoOffBold = memo(
  forwardRef<SVGSVGElement, VideoOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M.23 4.36a1 1 0 0 1 1.4-.13l17 14a1 1 0 0 1-1.27 1.54l-1.5-1.23-.04.03c-.49.24-1 .34-1.57.39q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .6-1.93L.36 5.77a1 1 0 0 1-.13-1.4M3.2 8.11c-.08.16-.14.38-.17.8C3 9.36 3 9.94 3 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.4c.78 0 1.33 0 1.76-.03zM12.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57v.2l3.42-2.73A1 1 0 0 1 23 7v10a1 1 0 0 1-1.62.78l-5-4A1 1 0 0 1 16 13v-2.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C13.64 7 13.06 7 12.2 7H6.93a1 1 0 0 1 0-2zm5.8 6.48v1.04l3 2.4V9.08z" clipRule="evenodd" />
    </IconBase>
  ))
);

VideoOffBold.displayName = 'VideoOffBold';

// Triple export pattern (lucide-react style)
export { VideoOffBold, VideoOffBold as VideoOffBoldIcon, VideoOffBold as SiVideoOffBold };
export default VideoOffBold;
export type { VideoOffBoldProps };
