import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlayCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 9.99c0-.97 0-1.46.2-1.72q.29-.37.74-.4c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96q.15.38 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79q-.46-.04-.74-.4c-.2-.26-.2-.75-.2-1.72z" />
    </IconBase>
  ))
);

PlayCircleBoldDuotone.displayName = 'PlayCircleBoldDuotone';

// Triple export pattern
export { PlayCircleBoldDuotone, PlayCircleBoldDuotone as PlayCircleBoldDuotoneIcon, PlayCircleBoldDuotone as SiPlayCircleBoldDuotone };
export default PlayCircleBoldDuotone;
export type { PlayCircleBoldDuotoneProps };
