import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type VideoOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, VideoOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-off-duotone" {...props}>
      <path d="M3.14 7.74q-.08.1-.14.24c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h5.4c.85 0 1.45 0 1.9-.04q.29-.02.47-.06l1.3 1.07-.17.12c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03a4 4 0 0 1 .69-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47l.03.68 3.8-3.04a.75.75 0 0 1 1.21.59v10a.75.75 0 0 1-1.22.59l-5-4a.8.8 0 0 1-.28-.59v-2.2c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H6.93a.75.75 0 1 1 0-1.5zm5.55 6.11v1.28l3.5 2.8V8.56z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M.42 4.52a.75.75 0 0 1 1.06-.1l17 14a.75.75 0 0 1-.96 1.16l-17-14a.75.75 0 0 1-.1-1.06" />
    </IconBase>
  ))
);

VideoOffRegularDuotone.displayName = 'VideoOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { VideoOffRegularDuotone, VideoOffRegularDuotone as VideoOffRegularDuotoneIcon, VideoOffRegularDuotone as SiVideoOffRegularDuotone };
export default VideoOffRegularDuotone;
export type { VideoOffRegularDuotoneProps };
