import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlashFillDuotone = memo(
  forwardRef<SVGSVGElement, SlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="slash-fill-duotone" {...props}>
      <path d="m13.12 13-8 9a1.5 1.5 0 0 1-2.24-2l8-9z" opacity={.4} />
        <path d="M18.88 2a1.5 1.5 0 0 1 2.24 2l-8 9-2.24-2z" />
    </IconBase>
  ))
);

SlashFillDuotone.displayName = 'SlashFillDuotone';

// Triple export pattern (lucide-react style)
export { SlashFillDuotone, SlashFillDuotone as SlashFillDuotoneIcon, SlashFillDuotone as SiSlashFillDuotone };
export default SlashFillDuotone;
export type { SlashFillDuotoneProps };
