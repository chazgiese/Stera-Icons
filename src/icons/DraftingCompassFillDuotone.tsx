import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DraftingCompassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFillDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={.4} />
        <path fill="currentColor" d="M4.45 16.63a1 1 0 0 1 1.72 1.03l-2.31 3.85a1 1 0 0 1-1.72-1.02z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a4 4 0 0 1 2.85 6.8l7 11.69a1 1 0 0 1-1.7 1.02l-3.37-5.6A11 11 0 0 1 2.1 10.8a1 1 0 0 1 1.8-.88 9 9 0 0 0 11.85 4.26l-2.62-4.36a4 4 0 0 1-2.27 0l-1.6 2.68a1 1 0 0 1-1.72-1.02l1.6-2.69A3.99 3.99 0 0 1 12 2m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassFillDuotone.displayName = 'DraftingCompassFillDuotone';

// Triple export pattern (lucide-react style)
export { DraftingCompassFillDuotone, DraftingCompassFillDuotone as DraftingCompassFillDuotoneIcon, DraftingCompassFillDuotone as SiDraftingCompassFillDuotone };
export type { DraftingCompassFillDuotoneProps };
