import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PlayCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-1.56 6.12q-.46.04-.74.4c-.2.26-.2.75-.2 1.72V14c0 .97 0 1.46.2 1.72q.29.36.74.4c.34.02.74-.25 1.55-.79l3.01-2c.67-.45 1-.68 1.12-.96q.15-.38 0-.76c-.12-.28-.45-.5-1.12-.95L12 8.66c-.81-.54-1.21-.81-1.55-.79" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 9.99c0-.97 0-1.46.2-1.72q.29-.37.74-.4c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96q.15.38 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79q-.46-.04-.74-.4c-.2-.26-.2-.75-.2-1.72z" />
    </IconBase>
  ))
);

PlayCircleFillDuotone.displayName = 'PlayCircleFillDuotone';

// Triple export pattern
export { PlayCircleFillDuotone, PlayCircleFillDuotone as PlayCircleFillDuotoneIcon, PlayCircleFillDuotone as SiPlayCircleFillDuotone };
export default PlayCircleFillDuotone;
export type { PlayCircleFillDuotoneProps };
