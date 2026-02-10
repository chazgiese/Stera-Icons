import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersFillProps = Omit<IconBaseProps, 'children'>;

const LayersFill = memo(
  forwardRef<SVGSVGElement, LayersFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layers-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.76 3a5 5 0 0 1 4.48 0l5.87 2.94a1.75 1.75 0 0 1 0 3.13l-1.37.68 1.37.69a1.75 1.75 0 0 1 0 3.12l-1.37.69 1.37.69a1.75 1.75 0 0 1 0 3.12L14.24 21a5 5 0 0 1-4.48 0L3.9 18.06a1.75 1.75 0 0 1 0-3.12l1.38-.7-1.38-.68a1.75 1.75 0 0 1 0-3.12l1.37-.69-1.37-.68a1.75 1.75 0 0 1 0-3.13zm4.48 13.5a5 5 0 0 1-4.48 0L7.5 15.37 5.23 16.5l5.43 2.71a3 3 0 0 0 2.68 0l5.42-2.71-2.26-1.13zm0-4.5a5 5 0 0 1-4.48 0L7.5 10.87 5.24 12l5.42 2.71a3 3 0 0 0 2.68 0L18.76 12l-2.26-1.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersFill.displayName = 'LayersFill';

// Triple export pattern (lucide-react style)
export { LayersFill, LayersFill as LayersFillIcon, LayersFill as SiLayersFill };
export default LayersFill;
export type { LayersFillProps };
