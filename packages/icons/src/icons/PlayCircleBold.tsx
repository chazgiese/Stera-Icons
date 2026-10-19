import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PlayCircleBold = memo(
  forwardRef<SVGSVGElement, PlayCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96q.15.38 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79q-.46-.03-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72q.29-.37.74-.4" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayCircleBold.displayName = 'PlayCircleBold';

// Triple export pattern
export { PlayCircleBold, PlayCircleBold as PlayCircleBoldIcon, PlayCircleBold as SiPlayCircleBold };
export default PlayCircleBold;
export type { PlayCircleBoldProps };
