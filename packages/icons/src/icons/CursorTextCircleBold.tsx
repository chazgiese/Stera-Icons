import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleBold = memo(
  forwardRef<SVGSVGElement, CursorTextCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 6.5c.77 0 1.47.3 2 .77.53-.48 1.23-.77 2-.77h.5c.55 0 1 .45 1 1s-.45 1-1 1H14c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h.5c.55 0 1 .45 1 1s-.45 1-1 1H14c-.77 0-1.47-.3-2-.77-.53.48-1.23.77-2 .77h-.5c-.55 0-1-.45-1-1s.45-1 1-1h.5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1h-.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorTextCircleBold.displayName = 'CursorTextCircleBold';

// Triple export pattern
export { CursorTextCircleBold, CursorTextCircleBold as CursorTextCircleBoldIcon, CursorTextCircleBold as SiCursorTextCircleBold };
export default CursorTextCircleBold;
export type { CursorTextCircleBoldProps };
