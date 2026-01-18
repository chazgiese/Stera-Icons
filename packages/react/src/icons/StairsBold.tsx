import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StairsBoldProps = Omit<IconBaseProps, 'children'>;

const StairsBold = memo(
  forwardRef<SVGSVGElement, StairsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22.5 2.5a1 1 0 1 1 0 2h-4.67v5.67a1 1 0 0 1-1 1h-5.66v5.66a1 1 0 0 1-1 1H4.5v4.67a1 1 0 1 1-2 0v-5.67a1 1 0 0 1 1-1h5.67v-5.66a1 1 0 0 1 1-1h5.66V3.5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

StairsBold.displayName = 'StairsBold';

// Triple export pattern (lucide-react style)
export { StairsBold, StairsBold as StairsBoldIcon, StairsBold as SiStairsBold };
export type { StairsBoldProps };
