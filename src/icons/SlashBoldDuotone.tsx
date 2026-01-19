import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, SlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="slash-bold-duotone" {...props}>
      <path fill="currentColor" d="m12.75 12.66-8 9a1 1 0 1 1-1.5-1.32l8-9z" opacity={.4} />
        <path fill="currentColor" d="M19.25 2.34a1 1 0 1 1 1.5 1.32l-8 9-1.5-1.32z" />
    </IconBase>
  ))
);

SlashBoldDuotone.displayName = 'SlashBoldDuotone';

// Triple export pattern (lucide-react style)
export { SlashBoldDuotone, SlashBoldDuotone as SlashBoldDuotoneIcon, SlashBoldDuotone as SiSlashBoldDuotone };
export type { SlashBoldDuotoneProps };
