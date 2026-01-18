import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OptionKeyRegularProps = Omit<IconBaseProps, 'children'>;

const OptionKeyRegular = memo(
  forwardRef<SVGSVGElement, OptionKeyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 4.25c.3 0 .57.18.69.45l5.8 13.55H21a.75.75 0 0 1 0 1.5h-6a.8.8 0 0 1-.69-.45L8.51 5.75H3a.75.75 0 0 1 0-1.5zM21 4.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

OptionKeyRegular.displayName = 'OptionKeyRegular';

// Triple export pattern (lucide-react style)
export { OptionKeyRegular, OptionKeyRegular as OptionKeyRegularIcon, OptionKeyRegular as SiOptionKeyRegular };
export type { OptionKeyRegularProps };
