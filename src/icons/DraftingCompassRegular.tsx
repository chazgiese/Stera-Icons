import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DraftingCompassRegularProps = Omit<IconBaseProps, 'children'>;

const DraftingCompassRegular = memo(
  forwardRef<SVGSVGElement, DraftingCompassRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="drafting-compass" {...props}>
      <path d="M5.24 15.94a.75.75 0 0 1 1.29.77l-1.88 3.17a.75.75 0 0 1-1.3-.76z" />
        <path fillRule="evenodd" d="M12 2.75a3.25 3.25 0 0 1 2.26 5.59l6.39 10.78a.75.75 0 0 1-1.3.76l-3.04-5.13q-1.97.98-4.31 1a9.8 9.8 0 0 1-8.67-5.28.75.75 0 0 1 1.34-.69 8.25 8.25 0 0 0 10.87 3.67L12.97 9.1a3.3 3.3 0 0 1-1.94 0L9.6 11.54a.75.75 0 0 1-1.3-.76l1.45-2.44A3.24 3.24 0 0 1 12 2.75m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DraftingCompassRegular.displayName = 'DraftingCompassRegular';

// Triple export pattern (lucide-react style)
export { DraftingCompassRegular, DraftingCompassRegular as DraftingCompassRegularIcon, DraftingCompassRegular as SiDraftingCompassRegular };
export default DraftingCompassRegular;
export type { DraftingCompassRegularProps };
