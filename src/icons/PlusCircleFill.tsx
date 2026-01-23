import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleFillProps = Omit<IconBaseProps, 'children'>;

const PlusCircleFill = memo(
  forwardRef<SVGSVGElement, PlusCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 5a1 1 0 0 0-1 1v4H7a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleFill.displayName = 'PlusCircleFill';

// Triple export pattern (lucide-react style)
export { PlusCircleFill, PlusCircleFill as PlusCircleFillIcon, PlusCircleFill as SiPlusCircleFill };
export default PlusCircleFill;
export type { PlusCircleFillProps };
