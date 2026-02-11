import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassBoldProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassBold = memo(
  forwardRef<SVGSVGElement, DraftingCompassBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass-bold" {...props}>
      <path d="M5.02 15.82a1 1 0 0 1 1.72 1.02L4.86 20a1 1 0 0 1-1.72-1.02z" />
        <path fillRule="evenodd" d="M12 2.5a3.5 3.5 0 0 1 2.57 5.87l2.87 4.86.01.01 3.41 5.75a1 1 0 1 1-1.72 1.02l-2.93-4.94q-1.93.91-4.21.93a10 10 0 0 1-8.89-5.41 1 1 0 0 1 1.78-.92 8 8 0 0 0 10.3 3.67l-2.34-3.95a3.5 3.5 0 0 1-1.7 0L9.8 11.67a1 1 0 0 1-1.72-1.02l1.35-2.28A3.49 3.49 0 0 1 12 2.5m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassBold.displayName = 'DraftingCompassBold';

// Triple export pattern (lucide-react style)
export { DraftingCompassBold, DraftingCompassBold as DraftingCompassBoldIcon, DraftingCompassBold as SiDraftingCompassBold };
export default DraftingCompassBold;
export type { DraftingCompassBoldProps };
