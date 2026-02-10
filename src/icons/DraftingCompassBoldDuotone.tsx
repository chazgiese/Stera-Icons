import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassBoldDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass-bold-duotone" {...props}>
      <path d="M5.02 15.82a1 1 0 0 1 1.72 1.02L4.86 20a1 1 0 0 1-1.72-1.02zM9.43 8.37a3.5 3.5 0 0 0 1.72 1.02L9.8 11.67a1 1 0 0 1-1.72-1.02z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.5a3.5 3.5 0 0 1 2.57 5.87l2.87 4.85v.01l.01.01 3.41 5.75a1 1 0 1 1-1.72 1.02l-2.93-4.94q-1.93.92-4.21.93a10 10 0 0 1-8.89-5.41 1 1 0 0 1 1.78-.92 8 8 0 0 0 10.3 3.67l-2.34-3.95A3.5 3.5 0 1 1 12 2.5m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassBoldDuotone.displayName = 'DraftingCompassBoldDuotone';

// Triple export pattern (lucide-react style)
export { DraftingCompassBoldDuotone, DraftingCompassBoldDuotone as DraftingCompassBoldDuotoneIcon, DraftingCompassBoldDuotone as SiDraftingCompassBoldDuotone };
export default DraftingCompassBoldDuotone;
export type { DraftingCompassBoldDuotoneProps };
