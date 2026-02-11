import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlayCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
    </IconBase>
  ))
);

PlayCircleRegularDuotone.displayName = 'PlayCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlayCircleRegularDuotone, PlayCircleRegularDuotone as PlayCircleRegularDuotoneIcon, PlayCircleRegularDuotone as SiPlayCircleRegularDuotone };
export default PlayCircleRegularDuotone;
export type { PlayCircleRegularDuotoneProps };
