import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DraftingCompassFillProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassFill = memo(
  forwardRef<SVGSVGElement, DraftingCompassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass-fill" {...props}>
      <path fill="currentColor" d="M4.45 16.63a1 1 0 0 1 1.72 1.03l-2.31 3.85a1 1 0 0 1-1.72-1.02zM12 2.25a3.75 3.75 0 0 1 2.72 6.33l7.14 11.9a1 1 0 0 1-1.72 1.03l-3.36-5.6Q14.58 16.98 12 17a11 11 0 0 1-9.9-6.2 1 1 0 0 1 1.8-.87 9 9 0 0 0 11.84 4.26L13 9.6a4 4 0 0 1-2 0l-1.74 2.9a1 1 0 0 1-1.72-1.02l1.74-2.9A3.74 3.74 0 0 1 12 2.24" />
    </IconBase>
  ))
);

DraftingCompassFill.displayName = 'DraftingCompassFill';

// Triple export pattern (lucide-react style)
export { DraftingCompassFill, DraftingCompassFill as DraftingCompassFillIcon, DraftingCompassFill as SiDraftingCompassFill };
export type { DraftingCompassFillProps };
