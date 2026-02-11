import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardFill = memo(
  forwardRef<SVGSVGElement, ChevronInwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-inward-fill" {...props}>
      <path d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.7-1.7zM18 2a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 2z" />
    </IconBase>
  ))
);

ChevronInwardFill.displayName = 'ChevronInwardFill';

// Triple export pattern (lucide-react style)
export { ChevronInwardFill, ChevronInwardFill as ChevronInwardFillIcon, ChevronInwardFill as SiChevronInwardFill };
export default ChevronInwardFill;
export type { ChevronInwardFillProps };
