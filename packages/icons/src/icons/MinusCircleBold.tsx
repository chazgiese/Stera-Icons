import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBold = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 11c.55 0 1 .44 1 1 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1 0-.56.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MinusCircleBold.displayName = 'MinusCircleBold';

// Triple export pattern
export { MinusCircleBold, MinusCircleBold as MinusCircleBoldIcon, MinusCircleBold as SiMinusCircleBold };
export default MinusCircleBold;
export type { MinusCircleBoldProps };
