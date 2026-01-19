import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OptionKeyFillProps = Omit<IconBaseProps, 'children'>;

const OptionKeyFill = memo(
  forwardRef<SVGSVGElement, OptionKeyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="option-key-fill" {...props}>
      <path fill="currentColor" d="M9 3.5c.6 0 1.14.36 1.38.9l5.6 13.1H21a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1-1.38-.9L8.02 6.5H3a1.5 1.5 0 1 1 0-3zM21 3.5a1.5 1.5 0 0 1 0 3h-6.5a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

OptionKeyFill.displayName = 'OptionKeyFill';

// Triple export pattern (lucide-react style)
export { OptionKeyFill, OptionKeyFill as OptionKeyFillIcon, OptionKeyFill as SiOptionKeyFill };
export default OptionKeyFill;
export type { OptionKeyFillProps };
