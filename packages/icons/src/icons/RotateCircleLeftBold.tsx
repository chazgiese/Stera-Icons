import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftBold = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.8 6.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-.79.8h1.84c2.62 0 4.75 2.13 4.75 4.75S14.87 18 12.25 18c-1.6 0-3.02-.8-3.88-2-.32-.46-.21-1.08.24-1.4s1.07-.21 1.4.24c.5.7 1.31 1.16 2.24 1.16 1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75h-1.84l.8.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2.43-2.42c-.43-.43-.43-1.13 0-1.56z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleLeftBold.displayName = 'RotateCircleLeftBold';

// Triple export pattern
export { RotateCircleLeftBold, RotateCircleLeftBold as RotateCircleLeftBoldIcon, RotateCircleLeftBold as SiRotateCircleLeftBold };
export default RotateCircleLeftBold;
export type { RotateCircleLeftBoldProps };
