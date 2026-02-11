import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusBoldProps = Omit<IconBaseProps, 'children'>;

const PlusBold = memo(
  forwardRef<SVGSVGElement, PlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-bold" {...props}>
      <path d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PlusBold.displayName = 'PlusBold';

// Triple export pattern (lucide-react style)
export { PlusBold, PlusBold as PlusBoldIcon, PlusBold as SiPlusBold };
export default PlusBold;
export type { PlusBoldProps };
