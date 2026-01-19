import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type VideoOffRegularProps = Omit<IconBaseProps, 'children'>;

const VideoOffRegular = memo(
  forwardRef<SVGSVGElement, VideoOffRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-off" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M.42 4.52a.75.75 0 0 1 1.06-.1l17 14a.75.75 0 0 1-.96 1.16l-1.65-1.36-.17.12c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03a4 4 0 0 1 .69-2L.52 5.58a.75.75 0 0 1-.1-1.05m2.72 3.21L3 7.98c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.91s.1.71.2.91q.35.65.99.99c.2.1.46.16.91.2.46.04 1.06.04 1.91.04h5.4c.85 0 1.45 0 1.91-.04q.27-.02.46-.06zM12.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47l.03.68 3.8-3.04a.75.75 0 0 1 1.21.59v10a.75.75 0 0 1-1.22.59l-5-4a.8.8 0 0 1-.28-.59v-2.2c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H6.93a.75.75 0 0 1 0-1.5zm5.55 6.11v1.28l3.5 2.8V8.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

VideoOffRegular.displayName = 'VideoOffRegular';

// Triple export pattern (lucide-react style)
export { VideoOffRegular, VideoOffRegular as VideoOffRegularIcon, VideoOffRegular as SiVideoOffRegular };
export default VideoOffRegular;
export type { VideoOffRegularProps };
