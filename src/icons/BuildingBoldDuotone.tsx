import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingBoldDuotone = memo(
  forwardRef<SVGSVGElement, BuildingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="building-bold-duotone" {...props}>
      <path fill="currentColor" d="M14.8 2q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V20h-2V6.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C15.75 4 15.38 4 14.8 4H9.2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C7 5.25 7 5.62 7 6.2V20H5V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q8.4 1.99 9.2 2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13 15a2 2 0 0 1 2 2v3h4.5a1 1 0 0 1 0 2h-15a1 1 0 1 1 0-2H9v-3c0-1.1.9-2 2-2zm-2 5h2v-3h-2z" clipRule="evenodd" />
        <path fill="currentColor" d="M10.25 10a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zM14.25 10a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zM10.25 5.75a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1zM14.25 5.75a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

BuildingBoldDuotone.displayName = 'BuildingBoldDuotone';

// Triple export pattern (lucide-react style)
export { BuildingBoldDuotone, BuildingBoldDuotone as BuildingBoldDuotoneIcon, BuildingBoldDuotone as SiBuildingBoldDuotone };
export default BuildingBoldDuotone;
export type { BuildingBoldDuotoneProps };
