import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlayCircleFill = memo(
  forwardRef<SVGSVGElement, PlayCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1.56 5.87a1 1 0 0 0-.74.4c-.2.26-.2.75-.2 1.72V14c0 .97 0 1.46.2 1.72a1 1 0 0 0 .74.4c.34.02.74-.25 1.55-.79l3.01-2c.67-.45 1-.68 1.12-.96a1 1 0 0 0 0-.76c-.12-.28-.45-.5-1.12-.95L12 8.66c-.81-.54-1.21-.81-1.55-.79" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleFill.displayName = 'PlayCircleFill';

// Triple export pattern (lucide-react style)
export { PlayCircleFill, PlayCircleFill as PlayCircleFillIcon, PlayCircleFill as SiPlayCircleFill };
export default PlayCircleFill;
export type { PlayCircleFillProps };
