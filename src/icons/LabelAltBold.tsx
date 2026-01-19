import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelAltBoldProps = Omit<IconBaseProps, 'children'>;

const LabelAltBold = memo(
  forwardRef<SVGSVGElement, LabelAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="label-alt-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.9 3a2.25 2.25 0 0 1 1.75 3.44l-3.14 5.03a1 1 0 0 0 0 1.06l3.14 5.03a2.25 2.25 0 0 1-1.9 3.44H7.1a3 3 0 0 1-2.55-1.41l-3.75-6a3 3 0 0 1 0-3.18l3.75-6A3 3 0 0 1 7.11 3h13.8M6.99 5a1 1 0 0 0-.72.47l-3.75 6a1 1 0 0 0 0 1.06l3.75 6c.18.3.5.47.85.47h13.64c.2 0 .31-.22.2-.38l-3.14-5.03a3 3 0 0 1 0-3.18l3.15-5.03a.25.25 0 0 0-.15-.37L20.75 5H6.98" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltBold.displayName = 'LabelAltBold';

// Triple export pattern (lucide-react style)
export { LabelAltBold, LabelAltBold as LabelAltBoldIcon, LabelAltBold as SiLabelAltBold };
export type { LabelAltBoldProps };
