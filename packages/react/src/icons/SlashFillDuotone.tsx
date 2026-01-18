import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlashFillDuotone = memo(
  forwardRef<SVGSVGElement, SlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m13.12 13-8 9a1.5 1.5 0 0 1-2.24-2l8-9z" opacity={.4} />
        <path fill="currentColor" d="M18.88 2a1.5 1.5 0 0 1 2.24 2l-8 9-2.24-2z" />
    </IconBase>
  ))
);

SlashFillDuotone.displayName = 'SlashFillDuotone';

// Triple export pattern (lucide-react style)
export { SlashFillDuotone, SlashFillDuotone as SlashFillDuotoneIcon, SlashFillDuotone as SiSlashFillDuotone };
export type { SlashFillDuotoneProps };
