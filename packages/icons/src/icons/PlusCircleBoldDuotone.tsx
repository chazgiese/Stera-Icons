import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlusCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 7c.56 0 1 .45 1 1v3h3c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-3v3c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-3H8c-.55 0-1-.45-1-1 0-.56.45-1 1-1h3V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PlusCircleBoldDuotone.displayName = 'PlusCircleBoldDuotone';

// Triple export pattern
export { PlusCircleBoldDuotone, PlusCircleBoldDuotone as PlusCircleBoldDuotoneIcon, PlusCircleBoldDuotone as SiPlusCircleBoldDuotone };
export default PlusCircleBoldDuotone;
export type { PlusCircleBoldDuotoneProps };
