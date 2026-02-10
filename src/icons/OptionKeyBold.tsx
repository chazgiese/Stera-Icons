import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyBoldProps = Omit<IconBaseProps, 'children'>;

const OptionKeyBold = memo(
  forwardRef<SVGSVGElement, OptionKeyBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="option-key-bold" {...props}>
      <path fill="currentColor" d="M9 4a1 1 0 0 1 .92.6L15.66 18H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.92-.6L8.34 6H3a1 1 0 0 1 0-2zM21 4a1 1 0 0 1 0 2h-6.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

OptionKeyBold.displayName = 'OptionKeyBold';

// Triple export pattern (lucide-react style)
export { OptionKeyBold, OptionKeyBold as OptionKeyBoldIcon, OptionKeyBold as SiOptionKeyBold };
export default OptionKeyBold;
export type { OptionKeyBoldProps };
