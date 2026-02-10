import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFill = memo(
  forwardRef<SVGSVGElement, PlusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5a1 1 0 0 0-1 1v3H8a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3V8a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleFill.displayName = 'PlusCircleFill';

// Triple export pattern (lucide-react style)
export { PlusCircleFill, PlusCircleFill as PlusCircleFillIcon, PlusCircleFill as SiPlusCircleFill };
export default PlusCircleFill;
export type { PlusCircleFillProps };
