import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseRegularProps = Omit<IconBaseProps, 'children'>;

const CollapseRegular = memo(
  forwardRef<SVGSVGElement, CollapseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse" {...props}>
      <path d="m9 14.25.13.01h.02l.04.02.1.03a.8.8 0 0 1 .36.32l.04.08a1 1 0 0 1 .06.29v4a.75.75 0 0 1-1.5 0v-2.19l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72H5a.75.75 0 0 1 0-1.5zM19 14.25a.75.75 0 0 1 0 1.5h-2.19l3.72 3.72a.75.75 0 1 1-1.06 1.06l-3.72-3.72V19a.75.75 0 0 1-1.5 0v-4a1 1 0 0 1 .05-.28v-.01l.05-.08.12-.16q.07-.07.16-.12l.08-.04.1-.03.04-.02h.02l.13-.01zM3.47 3.47c.3-.3.77-.3 1.06 0l3.72 3.72V5a.75.75 0 0 1 1.5 0v4a1 1 0 0 1-.14.43 1 1 0 0 1-.18.18l-.14.08-.1.03-.04.01h-.02l-.05.02H5a.75.75 0 0 1 0-1.5h2.19L3.47 4.53a.75.75 0 0 1 0-1.06M19.47 3.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H19a.75.75 0 0 1 0 1.5h-4.08l-.05-.01h-.02l-.04-.02q-.05 0-.1-.03l-.08-.04a1 1 0 0 1-.25-.22 1 1 0 0 1-.13-.43V5a.75.75 0 0 1 1.5 0v2.19z" />
    </IconBase>
  ))
);

CollapseRegular.displayName = 'CollapseRegular';

// Triple export pattern (lucide-react style)
export { CollapseRegular, CollapseRegular as CollapseRegularIcon, CollapseRegular as SiCollapseRegular };
export default CollapseRegular;
export type { CollapseRegularProps };
