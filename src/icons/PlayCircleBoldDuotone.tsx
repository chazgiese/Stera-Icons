import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlayCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
    </IconBase>
  ))
);

PlayCircleBoldDuotone.displayName = 'PlayCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PlayCircleBoldDuotone, PlayCircleBoldDuotone as PlayCircleBoldDuotoneIcon, PlayCircleBoldDuotone as SiPlayCircleBoldDuotone };
export default PlayCircleBoldDuotone;
export type { PlayCircleBoldDuotoneProps };
