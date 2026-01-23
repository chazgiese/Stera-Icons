import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PlayCircleRegular = memo(
  forwardRef<SVGSVGElement, PlayCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-circle" {...props}>
      <path fill="currentColor" d="M9.94 6.87c.34-.02.74.25 1.55.79l4.51 3c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95l-4.51 3.01c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V9c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleRegular.displayName = 'PlayCircleRegular';

// Triple export pattern (lucide-react style)
export { PlayCircleRegular, PlayCircleRegular as PlayCircleRegularIcon, PlayCircleRegular as SiPlayCircleRegular };
export default PlayCircleRegular;
export type { PlayCircleRegularProps };
