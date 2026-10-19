import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBold = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1zM15 8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleBold.displayName = 'PauseCircleBold';

// Triple export pattern
export { PauseCircleBold, PauseCircleBold as PauseCircleBoldIcon, PauseCircleBold as SiPauseCircleBold };
export default PauseCircleBold;
export type { PauseCircleBoldProps };
