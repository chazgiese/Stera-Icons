import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down" {...props}>
      <path d="M18.47 8.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06L12 14.94z" />
    </IconBase>
  ))
);

ChevronDownRegular.displayName = 'ChevronDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronDownRegular, ChevronDownRegular as ChevronDownRegularIcon, ChevronDownRegular as SiChevronDownRegular };
export default ChevronDownRegular;
export type { ChevronDownRegularProps };
