import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleRegular = memo(
  forwardRef<SVGSVGElement, CollapseSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple" {...props}>
      <path fill="currentColor" d="M9 14.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-3.19l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5zM20.47 2.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v3.19z" />
    </IconBase>
  ))
);

CollapseSimpleRegular.displayName = 'CollapseSimpleRegular';

// Triple export pattern (lucide-react style)
export { CollapseSimpleRegular, CollapseSimpleRegular as CollapseSimpleRegularIcon, CollapseSimpleRegular as SiCollapseSimpleRegular };
export type { CollapseSimpleRegularProps };
