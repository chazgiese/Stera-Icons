import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlashRegularProps = Omit<IconBaseProps, 'children'>;

const SlashRegular = memo(
  forwardRef<SVGSVGElement, SlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.44 2.5a.75.75 0 0 1 1.12 1l-16 18a.75.75 0 0 1-1.12-1z" />
    </IconBase>
  ))
);

SlashRegular.displayName = 'SlashRegular';

// Triple export pattern (lucide-react style)
export { SlashRegular, SlashRegular as SlashRegularIcon, SlashRegular as SiSlashRegular };
export type { SlashRegularProps };
