import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DraftingCompassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassRegularDuotone = memo(
  forwardRef<SVGSVGElement, DraftingCompassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass-duotone" {...props}>
      <path d="M4.67 16.76a.75.75 0 0 1 1.28.78l-2.3 3.85a.75.75 0 0 1-1.3-.78zM9.47 8.76q.55.51 1.28.78l-1.7 2.85a.75.75 0 0 1-1.3-.78z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a3.75 3.75 0 0 1 2.53 6.51l7.11 11.85a.75.75 0 0 1-1.28.78l-3.49-5.8A10.75 10.75 0 0 1 2.32 10.7a.75.75 0 0 1 1.35-.66 9.25 9.25 0 0 0 12.43 4.25l-2.85-4.75A3.74 3.74 0 1 1 12 2.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassRegularDuotone.displayName = 'DraftingCompassRegularDuotone';

// Triple export pattern (lucide-react style)
export { DraftingCompassRegularDuotone, DraftingCompassRegularDuotone as DraftingCompassRegularDuotoneIcon, DraftingCompassRegularDuotone as SiDraftingCompassRegularDuotone };
export default DraftingCompassRegularDuotone;
export type { DraftingCompassRegularDuotoneProps };
