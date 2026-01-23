import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up" {...props}>
      <path fill="currentColor" d="M11.47 7.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 1 1-1.06 1.06L12 9.06l-6.47 6.47a.75.75 0 1 1-1.06-1.06z" />
    </IconBase>
  ))
);

ChevronUpRegular.displayName = 'ChevronUpRegular';

// Triple export pattern (lucide-react style)
export { ChevronUpRegular, ChevronUpRegular as ChevronUpRegularIcon, ChevronUpRegular as SiChevronUpRegular };
export default ChevronUpRegular;
export type { ChevronUpRegularProps };
