import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BuildingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingFillDuotone = memo(
  forwardRef<SVGSVGElement, BuildingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m17.17 0 .5.02q.47.03.96.25.73.37 1.1 1.1.22.49.25.96T20 3.4v17.2q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25T16.6 24H7.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q4 21.2 4 20.6V3.4q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T7.4 0h9.77M10 18a1 1 0 0 0-1 1v3h6v-3a1 1 0 0 0-1-1zm-.5-6.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9v-.6a1 1 0 0 0-.9-1h-.6m4.5 0a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9v-.6a1 1 0 0 0-.9-1H14M9.5 8a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9V9a1 1 0 0 0-.9-1h-.6M14 8a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9V9a1 1 0 0 0-.9-1H14M9.5 4.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9v-.6a1 1 0 0 0-.9-1h-.6m4.5 0a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-.9v-.6a1 1 0 0 0-.9-1H14" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14 18a1 1 0 0 1 1 1v3H9v-3a1 1 0 0 1 1-1zM10.1 11.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M14.6 11.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M10.1 8c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.6M14.6 8c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.6M10.1 4.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9h-.5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6M14.6 4.5c.5.06.9.48.9 1v.6a1 1 0 0 1-1 .9H14a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h.6" />
    </IconBase>
  ))
);

BuildingFillDuotone.displayName = 'BuildingFillDuotone';

export { BuildingFillDuotone };
export type { BuildingFillDuotoneProps };
