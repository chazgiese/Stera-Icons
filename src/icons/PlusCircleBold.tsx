import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PlusCircleBold = memo(
  forwardRef<SVGSVGElement, PlusCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-bold" {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleBold.displayName = 'PlusCircleBold';

// Triple export pattern (lucide-react style)
export { PlusCircleBold, PlusCircleBold as PlusCircleBoldIcon, PlusCircleBold as SiPlusCircleBold };
export default PlusCircleBold;
export type { PlusCircleBoldProps };
