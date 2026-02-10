import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingFillProps = Omit<IconBaseProps, 'children'>;

const BuildingFill = memo(
  forwardRef<SVGSVGElement, BuildingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="building-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37V20h.75a1 1 0 0 1 0 2h-15a1 1 0 1 1 0-2h.75V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM11 15.5a1 1 0 0 0-1 1V20h4v-3.5a1 1 0 0 0-1-1zM9.75 10a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-4-4.25a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

BuildingFill.displayName = 'BuildingFill';

// Triple export pattern (lucide-react style)
export { BuildingFill, BuildingFill as BuildingFillIcon, BuildingFill as SiBuildingFill };
export default BuildingFill;
export type { BuildingFillProps };
