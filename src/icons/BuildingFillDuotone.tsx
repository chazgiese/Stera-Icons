import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingFillDuotone = memo(
  forwardRef<SVGSVGElement, BuildingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="building-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37V20H14v-3.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1V20H5.25V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM9.75 10a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-4-4.25a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M13 15.5a1 1 0 0 1 1 1V20h5.5a1 1 0 0 1 0 2h-15a1 1 0 1 1 0-2H10v-3.5a1 1 0 0 1 1-1zM10.25 10a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zM14.25 10a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zM10.25 5.75a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1zM14.25 5.75a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

BuildingFillDuotone.displayName = 'BuildingFillDuotone';

// Triple export pattern (lucide-react style)
export { BuildingFillDuotone, BuildingFillDuotone as BuildingFillDuotoneIcon, BuildingFillDuotone as SiBuildingFillDuotone };
export default BuildingFillDuotone;
export type { BuildingFillDuotoneProps };
