import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashBoldProps = Omit<IconBaseProps, 'children'>;

const SlashBold = memo(
  forwardRef<SVGSVGElement, SlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="slash-bold" {...props}>
      <path fill="currentColor" d="M19.25 2.34a1 1 0 0 1 1.5 1.32l-16 18a1 1 0 0 1-1.5-1.32z" />
    </IconBase>
  ))
);

SlashBold.displayName = 'SlashBold';

// Triple export pattern (lucide-react style)
export { SlashBold, SlashBold as SlashBoldIcon, SlashBold as SiSlashBold };
export default SlashBold;
export type { SlashBoldProps };
